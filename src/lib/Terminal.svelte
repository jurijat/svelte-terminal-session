<svelte:options customElement="terminal-session" />

<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import type { SessionStep, Theme, ColorScheme } from './types';
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
  }

  let {
    theme = 'dark',
    session = [],
    autoplay = false,
    playbackSpeed = 1,
    showHeader = true,
    title = 'Terminal',
    colors = {},
    typingSpeed = 40,
    enableTyping = true
  }: Props = $props();

  // DOM references
  let terminalElement: HTMLElement;
  let contentElement: HTMLElement;
  
  // Playback state - These are the ONLY stateful variables
  let currentStepIndex = $state(0);
  let isPlaying = $state(false);
  let displayedSteps: SessionStep[] = $state([]);
  let typingStepIndex = $state(-1);
  let typedContent = $state('');
  
  // Non-reactive variables for internal tracking
  let playbackTimer: ReturnType<typeof setTimeout> | null = null;
  let typingTimer: ReturnType<typeof setTimeout> | null = null;
  let lastSessionLength = -1;
  
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
    if (isPlaying || !session || currentStepIndex >= session.length) return;
    
    isPlaying = true;
    playNextStep();
  }

  function playNextStep() {
    if (!session || currentStepIndex >= session.length) {
      isPlaying = false;
      playbackTimer = null;
      return;
    }

    const step = session[currentStepIndex];
    const delay = (step.delay || 1000) / playbackSpeed;

    playbackTimer = setTimeout(() => {
      if (!session) {
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
        
        if (currentStepIndex < session.length && isPlaying) {
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
    const prompt = step.prompt || '$';
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
        if (currentStepIndex < session.length && isPlaying) {
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
    } else if (!session || session.length === 0) {
      // No session to play
      return;
    } else if (currentStepIndex >= session.length) {
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
      const step = displayedSteps[typingStepIndex];
      
      // Clear typing timer
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
      
      // Show full content
      displayedSteps = displayedSteps.map((s, i) => 
        i === typingStepIndex ? { ...s, content: session[currentStepIndex].content } : s
      );
      
      // Reset typing state
      typingStepIndex = -1;
      typedContent = '';
      currentStepIndex++;
      
      // Continue playback
      if (currentStepIndex < session.length && isPlaying) {
        playNextStep();
      } else {
        isPlaying = false;
      }
    }
  }

  // Lifecycle: Handle component mount
  onMount(() => {
    // Check if session changed (for web component prop updates)
    // This runs once per mount, not in a reactive loop
    const checkSessionChange = () => {
      if (session && session.length !== lastSessionLength) {
        lastSessionLength = session.length;
        
        // Only reset if we had previous content
        if (displayedSteps.length > 0 || currentStepIndex > 0) {
          resetPlayback();
        }
        
        // Handle autoplay for new session
        if (autoplay && session.length > 0) {
          setTimeout(() => startPlayback(), 100);
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
</script>

<div class="terminal" bind:this={terminalElement}>
  {#if showHeader}
    <div class="terminal-header">
      <div class="terminal-buttons">
        <span class="terminal-button close"></span>
        <span class="terminal-button minimize"></span>
        <span class="terminal-button maximize"></span>
      </div>
      <div class="terminal-title">{title}</div>
      <div class="terminal-controls">
        <button 
          class="control-button" 
          onclick={togglePlayback}
          disabled={!session || session.length === 0}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button 
          class="control-button" 
          onclick={resetPlayback}
          disabled={displayedSteps.length === 0}
        >
          ↺
        </button>
        <button 
          class="control-button" 
          onclick={toggleTheme}
        >
          {theme === 'dark' ? '☀' : '🌙'}
        </button>
      </div>
    </div>
  {/if}
  
  <div class="terminal-content" bind:this={contentElement} onclick={skipTyping}>
    {#each displayedSteps as step, index}
      <div class="terminal-line {getStepClass(step.type)}">
        <pre>{formatContent(step, index)}{#if index === typingStepIndex}<span class="typing-cursor">▊</span>{/if}</pre>
      </div>
    {/each}
    {#if isPlaying && typingStepIndex === -1}
      <div class="terminal-cursor">▊</div>
    {/if}
  </div>
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
</style>