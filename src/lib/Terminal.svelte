<svelte:options customElement={{
  tag: "terminal-session",
  props: {
    showPlayButton: { attribute: 'show-play-button' },
    showResetButton: { attribute: 'show-reset-button' },
    showThemeToggle: { attribute: 'show-theme-toggle' },
    showWindowButtons: { attribute: 'show-window-buttons' },
    showTabs: { attribute: 'show-tabs', type: 'Boolean' },
    allowTabClose: { attribute: 'allow-tab-close', type: 'Boolean' },
    allowTabAdd: { attribute: 'allow-tab-add', type: 'Boolean' },
    autoplay: { attribute: 'autoplay', type: 'Boolean' },
    enableTyping: { attribute: 'enable-typing', type: 'Boolean' },
    showHeader: { attribute: 'show-header' },
    playbackSpeed: { attribute: 'playback-speed', type: 'Number' },
    typingSpeed: { attribute: 'typing-speed', type: 'Number' },
    activeTab: { attribute: 'active-tab', type: 'Number' },
    theme: { attribute: 'theme' },
    title: { attribute: 'title' },
    tabBarPosition: { attribute: 'tab-bar-position' }
  }
}} />

<script lang="ts">
  import { tick } from 'svelte';
  import type { SessionStep, Theme, ColorScheme, TabConfig, TabState, RichTextSegment, SessionContent } from './types';
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
  // No longer need manual attribute parsing - Svelte handles this for custom elements

  // Helper function to parse boolean attributes correctly
  function parseBooleanProp(prop: any, defaultValue: boolean = true, propName: string = ''): boolean {
    console.log(`[parseBooleanProp] ${propName}:`, {
      raw: prop,
      type: typeof prop,
      isUndefined: prop === undefined,
      isNull: prop === null,
      defaultValue
    });
    
    if (prop === undefined || prop === null) return defaultValue;
    if (typeof prop === 'boolean') return prop;
    if (typeof prop === 'string') {
      // Handle string values from HTML attributes
      if (prop.toLowerCase() === 'false') return false;
      if (prop.toLowerCase() === 'true') return true;
      // Empty string or any other value is considered true for boolean attributes
      return true;
    }
    return defaultValue;
  }

  // Debug: Log raw prop values
  console.log('[Terminal Props] Raw values:', {
    showPlayButton,
    showResetButton,
    showThemeToggle,
    showWindowButtons,
    showHeader
  });

  // Computed button visibility - parse boolean props correctly
  let showPlayButtonComputed = $derived(parseBooleanProp(showPlayButton, true, 'showPlayButton'));
  
  let showResetButtonComputed = $derived(parseBooleanProp(showResetButton, true, 'showResetButton'));
  
  let showThemeToggleComputed = $derived(parseBooleanProp(showThemeToggle, true, 'showThemeToggle'));
  
  let showWindowButtonsComputed = $derived(parseBooleanProp(showWindowButtons, true, 'showWindowButtons'));
  
  // Check if any control buttons should be shown
  let hasControlButtons = $derived(
    showPlayButtonComputed || showResetButtonComputed || showThemeToggleComputed
  );

  // Debug: Log computed values
  $effect(() => {
    console.log('[Terminal Computed] Button visibility:', {
      showPlayButtonComputed,
      showResetButtonComputed,
      showThemeToggleComputed,
      showWindowButtonsComputed,
      hasControlButtons
    });
  });
  
  
  // Use header visibility prop with default
  let showHeaderComputed = $derived(parseBooleanProp(showHeader, true));
  
  // Playback state - These are the ONLY stateful variables
  let currentStepIndex = $state(0);
  let isPlaying = $state(false);
  let displayedSteps: SessionStep[] = $state([]);
  let typingStepIndex = $state(-1);
  let typedContent = $state('');
  let hasAutoPlayed = $state(false);
  let isVisible = $state(false);
  let previousAutoplay = $state(autoplay);
  
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
    
    // Convert rich content to string for typing animation
    const fullContent = getContentAsString(step.content);
    let charIndex = 0;
    
    // Calculate typing speed (use step override or global setting)
    const charsPerSecond = step.typingSpeed || typingSpeed;
    const charDelay = 1000 / charsPerSecond;
    
    function typeChar() {
      // More defensive check - ensure we're still in a valid state
      if (!isPlaying || !currentSession || typingStepIndex < 0) {
        // Playback was stopped or invalid state
        typingTimer = null;
        typingStepIndex = -1;
        typedContent = '';
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
        
        // Use requestAnimationFrame to ensure smooth animation even when tab is not active
        typingTimer = setTimeout(() => {
          requestAnimationFrame(() => typeChar());
        }, randomDelay);
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
    
    // Start typing with requestAnimationFrame for smoother start
    requestAnimationFrame(() => typeChar());
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

  function isRichContent(content: SessionContent): content is RichTextSegment[] {
    return Array.isArray(content);
  }
  
  function getContentAsString(content: SessionContent): string {
    if (typeof content === 'string') {
      return content;
    }
    return content.map(segment => segment.text).join('');
  }
  
  function hasTableContent(content: SessionContent): boolean {
    if (!isRichContent(content)) return false;
    return content.some(segment => segment.isTableRow || segment.tableColumn);
  }
  
  function groupIntoTableRows(content: RichTextSegment[]): RichTextSegment[][] {
    const rows: RichTextSegment[][] = [];
    let currentRow: RichTextSegment[] = [];
    
    for (const segment of content) {
      if (segment.isTableRow && currentRow.length > 0) {
        // Finish current row and start a new one
        rows.push([...currentRow]);
        currentRow = [segment];
      } else {
        currentRow.push(segment);
      }
    }
    
    // Don't forget the last row
    if (currentRow.length > 0) {
      rows.push([...currentRow]);
    }
    
    return rows;
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

  // Use $effect instead of onMount to avoid lifecycle issues in web components
  let observer: IntersectionObserver | null = null;
  let interval: ReturnType<typeof setInterval> | null = null;
  
  // Effect 1: Set up IntersectionObserver to track visibility only
  $effect(() => {
    if (terminalElement && typeof IntersectionObserver !== 'undefined') {
      // Always create a new observer when terminal element changes
      const newObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            isVisible = entry.isIntersecting;
          });
        },
        { threshold: 0.1 } // Trigger when 10% visible
      );
      
      newObserver.observe(terminalElement);
      observer = newObserver;
      
      // Cleanup
      return () => {
        if (newObserver) {
          newObserver.disconnect();
        }
        observer = null;
      };
    }
  });
  
  // Effect 2: Handle autoplay changes - reset hasAutoPlayed when autoplay changes from false to true
  $effect(() => {
    if (autoplay !== previousAutoplay) {
      if (!previousAutoplay && autoplay) {
        // Autoplay changed from false to true - allow autoplay to trigger again
        hasAutoPlayed = false;
      }
      previousAutoplay = autoplay;
    }
  });
  
  // Effect 3: Handle autoplay reactively when conditions are met
  $effect(() => {
    if (
      autoplay && 
      isVisible && 
      !hasAutoPlayed && 
      !isPlaying && 
      currentSession && 
      currentSession.length > 0 && 
      currentStepIndex === 0
    ) {
      hasAutoPlayed = true;
      setTimeout(() => startPlayback(), 300);
    }
  });
  
  // Effect 4: Initialize component and handle session changes
  $effect(() => {
    if (terminalElement) {
      // Initialize first tab if tabs are provided
      if (showTabs && tabs && tabs.length > 0) {
        const firstTab = tabs[currentTabIndex] || tabs[0];
        if (firstTab) {
          lastTabId = firstTab.id;
        }
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
          
          // Reset autoplay flag for new session - the reactive effect will handle starting autoplay
          // This ensures autoplay works for new sessions
        }
        
        // Don't interfere with manual tab switches
        // This should only handle initial tab setup
        if (showTabs && currentTab && currentTab.id !== lastTabId && !tabStates.has(currentTab.id)) {
          // Only for initial setup of tabs
          lastTabId = currentTab.id;
          // Reset autoplay flag for new tab - the reactive effect will handle starting autoplay
          if (!tabStates.has(currentTab.id)) {
            hasAutoPlayed = false;
          }
        }
      };

      // Initial check
      checkSessionChange();
      
      // Set up interval to check for prop changes (web components don't trigger reactivity)
      interval = setInterval(checkSessionChange, 500);
    }
    
    // Cleanup function for the effect
    return () => {
      if (interval !== null) {
        clearInterval(interval);
        interval = null;
      }
      if (playbackTimer) {
        clearTimeout(playbackTimer);
        playbackTimer = null;
      }
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
    };
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
      {#if isRichContent(step.content) && hasTableContent(step.content)}
        <!-- Table content (outside pre) -->
        <div class="terminal-line {getStepClass(step.type)}" style="{step.marginTop ? `margin-top: ${step.marginTop};` : ''}{step.marginBottom ? `margin-bottom: ${step.marginBottom};` : ''}">
          <div class="terminal-table">
            {#each groupIntoTableRows(step.content) as row}
              {@const firstSegment = row[0]}
              {@const columnGap = firstSegment?.columnGap || '16px'}
              {@const rowGap = firstSegment?.rowGap || '4px'}
              <div class="terminal-table-row" style="gap: {columnGap}; margin-bottom: {rowGap};">
                {#each row as segment}
                  <div class="terminal-table-cell {segment.tableColumn ? `col-${segment.tableColumn}` : ''}" 
                    style="{segment.color ? `color: ${segment.color};` : ''}{segment.backgroundColor ? `background-color: ${segment.backgroundColor};` : ''}{segment.fontWeight ? `font-weight: ${segment.fontWeight};` : ''}{segment.textDecoration ? `text-decoration: ${segment.textDecoration};` : ''}{segment.fontStyle ? `font-style: ${segment.fontStyle};` : ''}{segment.width ? `width: ${segment.width};` : ''}{segment.align ? `text-align: ${segment.align};` : ''}">
                    {segment.text.trim()}
                  </div>
                {/each}
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <!-- Regular content (in pre) -->
        <div class="terminal-line {getStepClass(step.type)}" style="{step.marginTop ? `margin-top: ${step.marginTop};` : ''}{step.marginBottom ? `margin-bottom: ${step.marginBottom};` : ''}">
<pre>{#if step.type === 'command'}{step.prompt || '$'} {/if}{#if index === typingStepIndex}{typedContent}{:else if isRichContent(step.content)}{#each step.content as segment}{#if segment.display === 'block'}<div class="rich-text-segment" style="{segment.color ? `color: ${segment.color};` : ''}{segment.backgroundColor ? `background-color: ${segment.backgroundColor};` : ''}{segment.fontWeight ? `font-weight: ${segment.fontWeight};` : ''}{segment.textDecoration ? `text-decoration: ${segment.textDecoration};` : ''}{segment.fontStyle ? `font-style: ${segment.fontStyle};` : ''}{segment.marginTop ? `margin-top: ${segment.marginTop};` : ''}{segment.marginBottom ? `margin-bottom: ${segment.marginBottom};` : ''}{segment.marginLeft ? `margin-left: ${segment.marginLeft};` : ''}{segment.marginRight ? `margin-right: ${segment.marginRight};` : ''}">{@html segment.text.replace(/\n/g, '<br>')}</div>{:else}<span class="rich-text-segment" style="{segment.color ? `color: ${segment.color};` : ''}{segment.backgroundColor ? `background-color: ${segment.backgroundColor};` : ''}{segment.fontWeight ? `font-weight: ${segment.fontWeight};` : ''}{segment.textDecoration ? `text-decoration: ${segment.textDecoration};` : ''}{segment.fontStyle ? `font-style: ${segment.fontStyle};` : ''}{segment.marginLeft ? `margin-left: ${segment.marginLeft};` : ''}{segment.marginRight ? `margin-right: ${segment.marginRight};` : ''}">{@html segment.text.replace(/\n/g, '<br>')}</span>{/if}{/each}{:else}{@html step.content.replace(/\n/g, '<br>')}{/if}{#if index === typingStepIndex}<span class="typing-cursor">▊</span>{/if}</pre>
        </div>
      {/if}
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
    display: block;
    white-space: pre-wrap;
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

  /* Rich text segment styling */
  .rich-text-segment {
    display: inline;
  }

  /* Ensure rich text inherits terminal font properties */
  .terminal-line .rich-text-segment {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* Table layout styling */
  .terminal-table {
    display: block;
    width: 100%;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  .terminal-table-row {
    display: grid !important;
    grid-template-columns: 60px 100px 180px 1fr !important;
    gap: 16px;
    min-height: 1.5em;
    align-items: baseline;
    font-family: inherit;
  }

  .terminal-table-cell {
    overflow: visible;
  }

  /* Semantic column styling with fixed positioning */
  .terminal-table-row .terminal-table-cell.col-position {
    grid-column: 1;
    text-align: right;
    white-space: nowrap;
  }

  .terminal-table-row .terminal-table-cell.col-type {
    grid-column: 2;
    text-align: right;
    white-space: nowrap;
  }

  .terminal-table-row .terminal-table-cell.col-rule {
    grid-column: 3;
    white-space: nowrap;
  }

  .terminal-table-row .terminal-table-cell.col-message {
    grid-column: 4;
    white-space: normal;
    word-break: break-word;
  }
</style>