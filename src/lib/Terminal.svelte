<svelte:options customElement={{
  tag: "terminal-session",
  props: {
    showPlayButton: { attribute: 'show-play-button', type: 'Boolean' },
    showResetButton: { attribute: 'show-reset-button', type: 'Boolean' },
    showThemeToggle: { attribute: 'show-theme-toggle', type: 'Boolean' },
    showWindowButtons: { attribute: 'show-window-buttons', type: 'Boolean' },
    showTabs: { attribute: 'show-tabs', type: 'Boolean' },
    allowTabClose: { attribute: 'allow-tab-close', type: 'Boolean' },
    allowTabAdd: { attribute: 'allow-tab-add', type: 'Boolean' },
    autoplay: { attribute: 'autoplay', type: 'Boolean' },
    enableTyping: { attribute: 'enable-typing', type: 'Boolean' },
    showHeader: { attribute: 'show-header', type: 'Boolean' },
    playbackSpeed: { attribute: 'playback-speed', type: 'Number' },
    typingSpeed: { attribute: 'typing-speed', type: 'Number' },
    activeTab: { attribute: 'active-tab', type: 'Number' },
    theme: { attribute: 'theme' },
    title: { attribute: 'title' },
    tabBarPosition: { attribute: 'tab-bar-position' }
  }
}} />

<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { SessionStep, Theme, ColorScheme, TabConfig, TabState } from './types';
  import { darkTheme, lightTheme, applyTheme, mergeColors } from './themes';

  interface Props {
    theme?: Theme;
    session?: SessionStep[];
    autoplay?: boolean;
    playbackSpeed?: number;
    showHeader?: boolean;
    title?: string;
    colors?: Partial<ColorScheme>;
    typingSpeed?: number;
    enableTyping?: boolean;
    showPlayButton?: boolean;
    showResetButton?: boolean;
    showThemeToggle?: boolean;
    showWindowButtons?: boolean;
    // Tab-related props
    tabs?: TabConfig[];
    activeTab?: number;
    showTabs?: boolean;
    allowTabClose?: boolean;
    allowTabAdd?: boolean;
    tabBarPosition?: 'top' | 'bottom';
  }

  let {
    theme = 'dark',
    session = [],
    autoplay = false,
    playbackSpeed = 1,
    showHeader,
    title = 'Terminal',
    colors = {},
    typingSpeed = 40,
    enableTyping = true,
    showPlayButton,
    showResetButton,
    showThemeToggle,
    showWindowButtons,
    tabs = [],
    activeTab = 0,
    showTabs = false,
    allowTabClose = true,
    allowTabAdd = false,
    tabBarPosition = 'top'
  }: Props = $props();

  // DOM references
  let terminalElement: HTMLElement;
  let contentElement: HTMLElement;
  
  // Tab state management
  let currentTabIndex = $state(activeTab || 0);
  let tabStates = $state(new Map<string, TabState>());
  
  // Get current tab configuration
  let currentTab = $derived(
    showTabs && tabs && tabs.length > 0 
      ? tabs[currentTabIndex] || tabs[0]
      : null
  );
  
  // Get current session (from tab or prop)
  let currentSession = $derived(
    currentTab ? currentTab.session : session
  );
  
  // Get current title (from tab or prop)
  let currentTitle = $derived(
    currentTab ? currentTab.title : title
  );
  
  // Lifecycle: Handle component mount
  // Manual attribute parsing state
  let parsedShowHeader = $state(true);
  let parsedShowPlayButton = $state(true);
  let parsedShowResetButton = $state(true);
  let parsedShowThemeToggle = $state(true);
  let parsedShowWindowButtons = $state(true);

  // Computed button visibility (handle both boolean false and string "false")
  let showPlayButtonComputed = $derived(parsedShowPlayButton);
  
  let showResetButtonComputed = $derived(parsedShowResetButton);
  
  let showThemeToggleComputed = $derived(parsedShowThemeToggle);
  
  let showWindowButtonsComputed = $derived(parsedShowWindowButtons);
  
  // Check if any control buttons should be shown
  let hasControlButtons = $derived(
    showPlayButtonComputed || showResetButtonComputed || showThemeToggleComputed
  );
  
  
  // Use manually parsed header visibility
  let showHeaderComputed = $derived(parsedShowHeader);
  
  // Playback state - These are the ONLY stateful variables
  let currentStepIndex = $state(0);
  let isPlaying = $state(false);
  let displayedSteps: SessionStep[] = $state([]);
  let typingStepIndex = $state(-1);
  let typedContent = $state('');
  let hasAutoPlayed = $state(false);
  let isVisible = $state(false);
  
  // Non-reactive variables for internal tracking
  let playbackTimer: ReturnType<typeof setTimeout> | null = null;
  let typingTimer: ReturnType<typeof setTimeout> | null = null;
  let lastSessionLength = -1;
  let lastTabId = '';
  
  // Derived value for theme (pure computation, no side effects)
  let currentTheme = $derived(
    mergeColors(theme === 'dark' ? darkTheme : lightTheme, colors)
  );

  // Pure effect: Apply theme to DOM only (no state changes)
  $effect(() => {
    if (terminalElement && currentTheme) {
      applyTheme(currentTheme, terminalElement);
    }
  });

  // Pure effect: Scroll to bottom when steps are displayed (no state changes)
  $effect(() => {
    // Read the length to create dependency
    const stepCount = displayedSteps.length;
    
    if (contentElement && stepCount > 0) {
      // Use tick to ensure DOM is updated before scrolling
      tick().then(() => {
        if (contentElement) {
          contentElement.scrollTop = contentElement.scrollHeight;
        }
      });
    }
  });

  function startPlayback() {
    if (isPlaying || !currentSession || currentStepIndex >= currentSession.length) return;
    
    isPlaying = true;
    playNextStep();
  }

  function playNextStep() {
    if (!currentSession || currentStepIndex >= currentSession.length) {
      isPlaying = false;
      playbackTimer = null;
      return;
    }

    const step = currentSession[currentStepIndex];
    const delay = (step.delay || 1000) / playbackSpeed;

    playbackTimer = setTimeout(() => {
      if (!currentSession) {
        isPlaying = false;
        playbackTimer = null;
        return;
      }
      
      // Check if this is a command that should be typed
      if (step.type === 'command' && enableTyping && !step.skipTyping) {
        startTypingAnimation(step);
      } else {
        // Display immediately
        displayedSteps = [...displayedSteps, step];
        currentStepIndex++;
        
        if (currentStepIndex < currentSession.length && isPlaying) {
          playNextStep();
        } else {
          isPlaying = false;
          playbackTimer = null;
        }
      }
    }, delay);
  }

  function startTypingAnimation(step: SessionStep) {
    // Set up typing state
    typingStepIndex = displayedSteps.length;
    typedContent = '';
    
    // Add the step with empty content initially
    displayedSteps = [...displayedSteps, { ...step, content: '' }];
    
    const fullContent = step.content;
    let charIndex = 0;
    
    // Calculate typing speed (use step override or global setting)
    const charsPerSecond = step.typingSpeed || typingSpeed;
    const charDelay = 1000 / charsPerSecond;
    
    function typeChar() {
      if (!isPlaying) {
        // Playback was stopped
        typingTimer = null;
        return;
      }
      
      if (charIndex < fullContent.length) {
        typedContent += fullContent[charIndex];
        
        // Update the displayed step with typed content
        displayedSteps = displayedSteps.map((s, i) => 
          i === typingStepIndex ? { ...step, content: typedContent } : s
        );
        
        charIndex++;
        
        // Add slight variation for more natural typing (±20% of base delay)
        const variation = charDelay * 0.2;
        const randomDelay = charDelay + (Math.random() - 0.5) * variation;
        
        typingTimer = setTimeout(typeChar, randomDelay);
      } else {
        // Typing complete
        typingStepIndex = -1;
        typedContent = '';
        typingTimer = null;
        currentStepIndex++;
        
        // Continue with next step
        if (currentStepIndex < currentSession.length && isPlaying) {
          playNextStep();
        } else {
          isPlaying = false;
        }
      }
    }
    
    // Start typing
    typeChar();
  }

  function resetPlayback() {
    // Stop any ongoing playback
    if (playbackTimer) {
      clearTimeout(playbackTimer);
      playbackTimer = null;
    }
    
    // Stop typing animation
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    
    // Reset all state
    currentStepIndex = 0;
    displayedSteps = [];
    isPlaying = false;
    typingStepIndex = -1;
    typedContent = '';
  }

  function togglePlayback() {
    if (isPlaying) {
      // Pause
      isPlaying = false;
      if (playbackTimer) {
        clearTimeout(playbackTimer);
        playbackTimer = null;
      }
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
    } else if (!currentSession || currentSession.length === 0) {
      // No session to play
      return;
    } else if (currentStepIndex >= currentSession.length) {
      // Restart from beginning
      resetPlayback();
      // Small delay to allow state to settle
      setTimeout(() => startPlayback(), 10);
    } else {
      // Resume or start
      startPlayback();
    }
  }

  function getStepClass(type: string): string {
    return `step-${type}`;
  }

  function formatContent(step: SessionStep, index: number): string {
    const prompt = step.prompt || '$';
    
    if (step.type === 'command') {
      // If this step is currently being typed, show partial content
      if (index === typingStepIndex) {
        return `${prompt} ${typedContent}`;
      }
      return `${prompt} ${step.content}`;
    }
    return step.content;
  }
  
  function skipTyping() {
    // Skip current typing animation and show full content
    if (typingStepIndex >= 0 && typingStepIndex < displayedSteps.length) {
      
      // Clear typing timer
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
      
      // Show full content
      displayedSteps = displayedSteps.map((s, i) => 
        i === typingStepIndex ? { ...s, content: currentSession[currentStepIndex].content } : s
      );
      
      // Reset typing state
      typingStepIndex = -1;
      typedContent = '';
      currentStepIndex++;
      
      // Continue playback
      if (currentStepIndex < currentSession.length && isPlaying) {
        playNextStep();
      } else {
        isPlaying = false;
      }
    }
  }

  
  onMount(() => {
    // Manual attribute parsing - try multiple methods to access the host custom element
    if (terminalElement) {
      const elementId = 'terminal-' + Math.random().toString(36).substr(2, 9);
      
      // Try multiple methods to find the host element
      let hostElement = null;
      let method = 'none';
      
      // Method 1: closest() - standard approach
      const closestElement = terminalElement.closest('terminal-session');
      if (closestElement) {
        hostElement = closestElement;
        method = 'closest()';
      }
      
      // Method 2: parentElement traversal
      let current = terminalElement.parentElement;
      while (current && !hostElement) {
        if (current.tagName?.toLowerCase() === 'terminal-session') {
          hostElement = current;
          method = 'parentElement traversal';
          break;
        }
        current = current.parentElement;
      }
      
      // Method 3: getRootNode() approach
      if (!hostElement) {
        const root = terminalElement.getRootNode();
        if (root && root.host && root.host.tagName?.toLowerCase() === 'terminal-session') {
          hostElement = root.host;
          method = 'getRootNode().host';
        }
      }
      
      // Method 4: Direct document query (fallback)
      if (!hostElement) {
        const allTerminals = document.querySelectorAll('terminal-session');
        for (const terminal of allTerminals) {
          if (terminal.contains(terminalElement)) {
            hostElement = terminal;
            method = 'document.querySelectorAll + contains()';
            break;
          }
        }
      }
      
      // Comprehensive DOM debugging
      console.log(`[${elementId}] DOM Structure Analysis:`);
      console.log(`[${elementId}] Inner element:`, terminalElement.tagName, terminalElement.className);
      console.log(`[${elementId}] Parent chain:`, getParentChain(terminalElement));
      console.log(`[${elementId}] Root node:`, terminalElement.getRootNode()?.constructor?.name);
      console.log(`[${elementId}] Host found via:`, method);
      console.log(`[${elementId}] Host element:`, hostElement?.tagName, hostElement?.id);
      
      if (hostElement) {
        // Parse attributes from the host element
        const showHeaderAttr = hostElement.getAttribute('show-header');
        parsedShowHeader = showHeaderAttr === 'false' ? false : (showHeader ?? true);
        
        const showPlayButtonAttr = hostElement.getAttribute('show-play-button');
        parsedShowPlayButton = showPlayButtonAttr === 'false' ? false : (showPlayButton ?? true);
        
        const showResetButtonAttr = hostElement.getAttribute('show-reset-button');
        parsedShowResetButton = showResetButtonAttr === 'false' ? false : (showResetButton ?? true);
        
        const showThemeToggleAttr = hostElement.getAttribute('show-theme-toggle');
        parsedShowThemeToggle = showThemeToggleAttr === 'false' ? false : (showThemeToggle ?? true);
        
        const showWindowButtonsAttr = hostElement.getAttribute('show-window-buttons');
        parsedShowWindowButtons = showWindowButtonsAttr === 'false' ? false : (showWindowButtons ?? true);
        
        // Success logging
        console.log(`[${elementId}] ✅ ATTRIBUTES FOUND:`);
        console.log(`[${elementId}] show-header="${showHeaderAttr}" -> parsedShowHeader:`, parsedShowHeader);
        console.log(`[${elementId}] show-play-button="${showPlayButtonAttr}" -> parsedShowPlayButton:`, parsedShowPlayButton);
        console.log(`[${elementId}] show-reset-button="${showResetButtonAttr}" -> parsedShowResetButton:`, parsedShowResetButton);
        console.log(`[${elementId}] show-theme-toggle="${showThemeToggleAttr}" -> parsedShowThemeToggle:`, parsedShowThemeToggle);
        console.log(`[${elementId}] show-window-buttons="${showWindowButtonsAttr}" -> parsedShowWindowButtons:`, parsedShowWindowButtons);
      } else {
        console.error(`[${elementId}] ❌ FAILED: Could not find host terminal-session element with any method!`);
        console.error(`[${elementId}] This suggests a fundamental issue with custom element structure.`);
      }
    }
    
    // Helper function for parent chain debugging
    function getParentChain(element) {
      const chain = [];
      let current = element;
      while (current && chain.length < 10) { // Limit to avoid infinite loops
        chain.push({
          tag: current.tagName,
          class: current.className,
          id: current.id
        });
        current = current.parentElement;
      }
      return chain;
    }
    
    // Initialize first tab if tabs are provided
    if (showTabs && tabs && tabs.length > 0) {
      const firstTab = tabs[currentTabIndex] || tabs[0];
      if (firstTab) {
        lastTabId = firstTab.id;
      }
    }
    
    // Set up IntersectionObserver for visibility-based autoplay
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && terminalElement) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            
            // Start autoplay when becoming visible
            if (entry.isIntersecting && autoplay && !hasAutoPlayed && !isPlaying) {
              const activeSession = currentSession;
              if (activeSession && activeSession.length > 0 && currentStepIndex === 0) {
                hasAutoPlayed = true;
                setTimeout(() => startPlayback(), 300);
              }
            }
            
            // Optionally pause when going out of view
            if (!entry.isIntersecting && isPlaying) {
              // Uncomment to pause when scrolled out of view
              // isPlaying = false;
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% visible
      );
      
      observer.observe(terminalElement);
    }
    
    // Check if session changed (for web component prop updates)
    // This runs once per mount, not in a reactive loop
    const checkSessionChange = () => {
      const activeSession = currentSession;
      
      // Only check for completely new sessions, not tab switches
      if (!showTabs && activeSession && activeSession.length !== lastSessionLength) {
        lastSessionLength = activeSession.length;
        
        // Only reset if we had previous content
        if (displayedSteps.length > 0 || currentStepIndex > 0) {
          resetPlayback();
          hasAutoPlayed = false; // Reset autoplay flag for new session
        }
        
        // Handle autoplay for new session
        if (autoplay && activeSession.length > 0 && (isVisible || !observer)) {
          if (!hasAutoPlayed) {
            hasAutoPlayed = true;
            setTimeout(() => startPlayback(), 100);
          }
        }
      }
      
      // Don't interfere with manual tab switches
      // This should only handle initial tab setup
      if (showTabs && currentTab && currentTab.id !== lastTabId && !tabStates.has(currentTab.id)) {
        // Only for initial setup of tabs
        lastTabId = currentTab.id;
        if (autoplay && currentSession && currentSession.length > 0) {
          setTimeout(() => startPlayback(), 300);
        }
      }
    };

    // Initial check
    checkSessionChange();
    
    // Set up interval to check for prop changes (web components don't trigger reactivity)
    const interval = setInterval(checkSessionChange, 500);

    // Cleanup
    return () => {
      clearInterval(interval);
      if (observer) {
        observer.disconnect();
      }
      if (playbackTimer) {
        clearTimeout(playbackTimer);
      }
      if (typingTimer) {
        clearTimeout(typingTimer);
      }
    };
  });

  // Lifecycle: Clean up on destroy
  onDestroy(() => {
    if (playbackTimer) {
      clearTimeout(playbackTimer);
    }
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
  });

  // Handle theme toggle
  function toggleTheme() {
    // This will trigger a prop update from the parent
    // We don't modify theme directly, we emit an event
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    terminalElement?.dispatchEvent(
      new CustomEvent('theme-change', { detail: newTheme })
    );
  }
  
  // Tab management functions
  function saveTabState() {
    if (currentTab) {
      tabStates.set(currentTab.id, {
        currentStepIndex,
        isPlaying,
        displayedSteps: [...displayedSteps],
        typingStepIndex,
        typedContent,
        lastUpdateTime: Date.now()
      });
    }
  }
  
  function loadTabState(tabId: string) {
    const state = tabStates.get(tabId);
    if (state) {
      // Calculate elapsed time since last update
      const elapsedTime = Date.now() - state.lastUpdateTime;
      
      // Load saved state
      currentStepIndex = state.currentStepIndex;
      isPlaying = state.isPlaying;
      displayedSteps = [...state.displayedSteps];
      typingStepIndex = state.typingStepIndex;
      typedContent = state.typedContent;
      
      // If tab was playing, simulate progress based on elapsed time
      if (state.isPlaying && currentSession && currentStepIndex < currentSession.length) {
        let simulatedIndex = currentStepIndex;
        let accumulatedTime = 0;
        
        // Calculate how many steps would have completed
        while (simulatedIndex < currentSession.length && accumulatedTime < elapsedTime) {
          const step = currentSession[simulatedIndex];
          const stepDelay = (step.delay || 1000) / playbackSpeed;
          
          if (accumulatedTime + stepDelay <= elapsedTime) {
            // This step would have completed
            displayedSteps = [...displayedSteps, step];
            simulatedIndex++;
            accumulatedTime += stepDelay;
          } else {
            break;
          }
        }
        
        currentStepIndex = simulatedIndex;
        
        // Continue playing if not finished
        if (currentStepIndex < currentSession.length) {
          // Resume playback from current position
          playNextStep();
        } else {
          // Playback would have finished
          isPlaying = false;
        }
      }
    } else {
      // Initialize new tab state - don't reset if we're just switching
      if (!tabStates.has(tabId)) {
        resetPlayback();
        // Autoplay new tab if enabled and visible
        if (autoplay && isVisible && currentSession && currentSession.length > 0) {
          setTimeout(() => startPlayback(), 300);
        }
      }
    }
  }
  
  function switchTab(index: number) {
    if (index === currentTabIndex || !tabs || index < 0 || index >= tabs.length) return;
    
    // Save current tab state (including playback state)
    saveTabState();
    
    // Clear timers for the current tab (they'll be recreated for the new tab if needed)
    if (playbackTimer) {
      clearTimeout(playbackTimer);
      playbackTimer = null;
    }
    if (typingTimer) {
      clearTimeout(typingTimer);
      typingTimer = null;
    }
    
    // Switch to new tab
    currentTabIndex = index;
    const newTab = tabs[index];
    
    // Load new tab state
    if (newTab) {
      loadTabState(newTab.id);
      lastTabId = newTab.id;
    }
    
    // Emit tab change event
    terminalElement?.dispatchEvent(
      new CustomEvent('tab-change', { detail: { index, tab: newTab } })
    );
  }
  
  function closeTab(index: number) {
    if (!tabs || tabs.length <= 1) return;
    
    const tabToClose = tabs[index];
    const isClosable = tabToClose.closable !== false && allowTabClose;
    
    if (!isClosable) return;
    
    // Remove tab state
    if (tabToClose) {
      tabStates.delete(tabToClose.id);
    }
    
    // Emit tab close event
    terminalElement?.dispatchEvent(
      new CustomEvent('tab-close', { detail: { index, tab: tabToClose } })
    );
    
    // If closing current tab, switch to another
    if (index === currentTabIndex) {
      const newIndex = index > 0 ? index - 1 : 0;
      if (tabs.length > 1) {
        switchTab(newIndex);
      }
    } else if (index < currentTabIndex) {
      // Adjust current index if a tab before current was closed
      currentTabIndex--;
    }
  }
  
  function addTab() {
    if (!allowTabAdd) return;
    
    // Emit add tab event
    terminalElement?.dispatchEvent(
      new CustomEvent('tab-add', { detail: {} })
    );
  }
  
  function getTabStatusClass(status?: string): string {
    if (!status) return '';
    return `tab-status-${status}`;
  }
</script>

<div class="terminal" bind:this={terminalElement}>
  {#if showHeaderComputed}
    <div class="terminal-header">
      {#if showWindowButtonsComputed}
        <div class="terminal-buttons">
          <span class="terminal-button close"></span>
          <span class="terminal-button minimize"></span>
          <span class="terminal-button maximize"></span>
        </div>
      {/if}
      <div class="terminal-title">{currentTitle}</div>
      {#if hasControlButtons}
        <div class="terminal-controls">
          {#if showPlayButtonComputed}
            <button 
              class="control-button" 
              onclick={togglePlayback}
              disabled={!currentSession || currentSession.length === 0}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          {/if}
          {#if showResetButtonComputed}
            <button 
              class="control-button" 
              onclick={resetPlayback}
              disabled={displayedSteps.length === 0}
            >
              ↺
            </button>
          {/if}
          {#if showThemeToggleComputed}
            <button 
              class="control-button" 
              onclick={toggleTheme}
            >
              {theme === 'dark' ? '☀' : '🌙'}
            </button>
          {/if}
        </div>
      {/if}
    </div>
  {/if}
  
  {#if showTabs && tabs && tabs.length > 0 && tabBarPosition === 'top'}
    <div class="terminal-tabs">
      {#each tabs as tab, index}
        <button 
          class="terminal-tab {index === currentTabIndex ? 'active' : ''} {getTabStatusClass(tab.status)}"
          onclick={() => switchTab(index)}
        >
          {#if tab.icon}
            <span class="tab-icon">{tab.icon}</span>
          {/if}
          <span class="tab-title">{tab.title}</span>
          {#if tab.badge !== undefined}
            <span class="tab-badge">{tab.badge}</span>
          {/if}
          {#if (tab.closable !== false && allowTabClose) && tabs.length > 1}
            <span 
              class="tab-close"
              role="button"
              tabindex="0"
              onclick={(e) => { e.stopPropagation(); closeTab(index); }}
              onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); closeTab(index); } }}
            >
              ×
            </span>
          {/if}
        </button>
      {/each}
      {#if allowTabAdd}
        <button class="terminal-tab tab-add" onclick={addTab}>
          +
        </button>
      {/if}
    </div>
  {/if}
  
  <div 
    class="terminal-content" 
    bind:this={contentElement} 
    role="button"
    aria-label="Terminal output - click to skip typing animation"
    tabindex="0"
    onclick={skipTyping}
    onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') skipTyping(); }}
  >
    {#each displayedSteps as step, index}
      <div class="terminal-line {getStepClass(step.type)}">
        <pre>{formatContent(step, index)}{#if index === typingStepIndex}<span class="typing-cursor">▊</span>{/if}</pre>
      </div>
    {/each}
    {#if isPlaying && typingStepIndex === -1}
      <div class="terminal-cursor">▊</div>
    {/if}
  </div>
  
  {#if showTabs && tabs && tabs.length > 0 && tabBarPosition === 'bottom'}
    <div class="terminal-tabs terminal-tabs-bottom">
      {#each tabs as tab, index}
        <button 
          class="terminal-tab {index === currentTabIndex ? 'active' : ''} {getTabStatusClass(tab.status)}"
          onclick={() => switchTab(index)}
        >
          {#if tab.icon}
            <span class="tab-icon">{tab.icon}</span>
          {/if}
          <span class="tab-title">{tab.title}</span>
          {#if tab.badge !== undefined}
            <span class="tab-badge">{tab.badge}</span>
          {/if}
          {#if (tab.closable !== false && allowTabClose) && tabs.length > 1}
            <span 
              class="tab-close"
              role="button"
              tabindex="0"
              onclick={(e) => { e.stopPropagation(); closeTab(index); }}
              onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.stopPropagation(); e.preventDefault(); closeTab(index); } }}
            >
              ×
            </span>
          {/if}
        </button>
      {/each}
      {#if allowTabAdd}
        <button class="terminal-tab tab-add" onclick={addTab}>
          +
        </button>
      {/if}
    </div>
  {/if}
</div>

<style>
  :host {
    display: block;
    font-family: 'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 14px;
    line-height: 1.5;
  }

  .terminal {
    width: 100%;
    height: 100%;
    min-height: 300px;
    background: var(--terminal-bg);
    color: var(--terminal-fg);
    border: 1px solid var(--terminal-border);
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  .terminal-header {
    background: var(--terminal-header-bg);
    color: var(--terminal-header-fg);
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--terminal-border);
  }

  .terminal-buttons {
    display: flex;
    gap: 8px;
  }

  .terminal-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  .terminal-button.close {
    background: #ff5f56;
  }

  .terminal-button.minimize {
    background: #ffbd2e;
  }

  .terminal-button.maximize {
    background: #27c93f;
  }

  .terminal-title {
    flex: 1;
    text-align: center;
    font-weight: 500;
  }

  .terminal-controls {
    display: flex;
    gap: 8px;
  }

  .control-button {
    background: transparent;
    color: var(--terminal-header-fg);
    border: 1px solid var(--terminal-border);
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
  }

  .control-button:hover:not(:disabled) {
    background: var(--terminal-border);
    color: var(--terminal-fg);
  }

  .control-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .terminal-content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    font-family: inherit;
  }

  .terminal-line {
    margin: 4px 0;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .terminal-line pre {
    margin: 0;
    font-family: inherit;
  }

  .step-command {
    color: var(--terminal-command);
    font-weight: bold;
  }

  .step-output {
    color: var(--terminal-output);
  }

  .step-error {
    color: var(--terminal-error);
  }

  .step-warning {
    color: var(--terminal-warning);
  }

  .step-info {
    color: var(--terminal-info);
  }

  .step-success {
    color: var(--terminal-success);
  }

  .terminal-cursor {
    display: inline-block;
    color: var(--terminal-cursor);
    animation: blink 1s infinite;
  }

  .typing-cursor {
    display: inline-block;
    color: var(--terminal-cursor);
    animation: blink 1s infinite;
    margin-left: 2px;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .terminal-content::-webkit-scrollbar {
    width: 8px;
  }

  .terminal-content::-webkit-scrollbar-track {
    background: var(--terminal-bg);
  }

  .terminal-content::-webkit-scrollbar-thumb {
    background: var(--terminal-border);
    border-radius: 4px;
  }

  .terminal-content::-webkit-scrollbar-thumb:hover {
    background: var(--terminal-header-fg);
  }

  /* Tab styles */
  .terminal-tabs {
    display: flex;
    background: var(--terminal-header-bg);
    border-bottom: 1px solid var(--terminal-border);
    gap: 4px;
    overflow-x: auto;
    align-items: center;
  }

  .terminal-tabs-bottom {
    border-bottom: none;
    border-top: 1px solid var(--terminal-border);
  }

  .terminal-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    background: transparent;
    color: var(--terminal-header-fg);
    border: none;
    border-top: 2px solid transparent;
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    transition: all 0.2s;
    white-space: nowrap;
    position: relative;
  }

  .terminal-tabs-bottom .terminal-tab {
    border-top: none;
    border-bottom: 2px solid transparent;
  }

  .terminal-tab:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .terminal-tab.active {
    background: var(--terminal-bg);
    border-top-color: var(--terminal-command);
  }

  .terminal-tabs-bottom .terminal-tab.active {
    border-top-color: transparent;
    border-bottom-color: var(--terminal-command);
  }

  .tab-icon {
    font-size: 14px;
  }

  .tab-title {
    flex: 1;
  }

  .tab-badge {
    padding: 2px 6px;
    background: var(--terminal-command);
    color: var(--terminal-bg);
    border-radius: 10px;
    font-size: 11px;
    font-weight: bold;
    min-width: 18px;
    text-align: center;
  }

  .tab-close {
    margin-left: 4px;
    padding: 0 4px;
    background: transparent;
    border: none;
    color: var(--terminal-header-fg);
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .tab-close:hover {
    opacity: 1;
    color: var(--terminal-error);
  }

  .tab-add {
    padding: 8px 16px;
    font-weight: bold;
    opacity: 0.7;
  }

  .tab-add:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
  }

  /* Tab status indicators */
  .tab-status-running .tab-icon::after {
    content: '●';
    color: var(--terminal-warning);
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: 8px;
    animation: pulse 1.5s infinite;
  }

  .tab-status-error .tab-icon::after {
    content: '●';
    color: var(--terminal-error);
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: 8px;
  }

  .tab-status-success .tab-icon::after {
    content: '●';
    color: var(--terminal-success);
    position: absolute;
    top: 6px;
    left: 8px;
    font-size: 8px;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */
  .terminal-tabs::-webkit-scrollbar {
    height: 4px;
  }

  .terminal-tabs::-webkit-scrollbar-track {
    background: transparent;
  }

  .terminal-tabs::-webkit-scrollbar-thumb {
    background: var(--terminal-border);
    border-radius: 2px;
  }
</style>