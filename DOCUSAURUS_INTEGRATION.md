# Docusaurus & React Integration Guide

This guide explains how to integrate the Terminal Session web component into React applications and Docusaurus documentation sites.

## Features

- **🎭 Themeable** - Light/dark/auto themes with full color customization
- **⚡ Typing Animation** - Realistic typing effects with configurable speed
- **🎮 Playback Controls** - Play, pause, reset with visibility controls
- **📑 Tab Support** - Multiple terminal sessions with background processing
- **🪟 Header Controls** - Configurable window buttons and toolbar
- **📱 Responsive** - Works on desktop and mobile
- **🚀 Performance** - Built with Svelte 5 for optimal speed
- **🔧 Web Component** - Framework agnostic, works everywhere

## Installation

### Option A: NPM Package
```bash
# In your React/Docusaurus project
npm install svelte-terminal-session
```

### Option B: Local Development
```bash
# Build the component first
cd react-terminal-session
npm install
npm run build

# Link for local development
npm link

# In your Docusaurus project
cd ../your-docusaurus-project
npm link svelte-terminal-session
```

## React Integration

### 1. Create a React Wrapper Component

Create `src/components/TerminalSession.js`:

```javascript
import React, { useEffect, useRef } from 'react';
import 'svelte-terminal-session'; // Import the web component

export default function TerminalSession({ 
  session = [],
  theme = 'dark',
  autoplay = false,
  playbackSpeed = 1,
  typingSpeed = 40,
  enableTyping = true,
  showHeader = true,
  title = 'Terminal',
  showPlayButton = true,
  showResetButton = true,
  showThemeToggle = true,
  showWindowButtons = true,
  tabs = [],
  activeTab = 0,
  showTabs = false,
  allowTabClose = true,
  allowTabAdd = false,
  colors = {},
  ...props 
}) {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      // Set complex objects as properties (not attributes)
      terminalRef.current.session = session;
      terminalRef.current.tabs = tabs;
      
      // Set colors object if provided
      if (colors && Object.keys(colors).length > 0) {
        terminalRef.current.colors = colors;
      }
    }
  }, [session, colors, tabs]);

  // Convert React props to web component attributes
  const webComponentProps = {
    theme,
    autoplay: autoplay.toString(),
    'playback-speed': playbackSpeed,
    'typing-speed': typingSpeed,
    'enable-typing': enableTyping.toString(),
    'show-header': showHeader.toString(),
    'show-play-button': showPlayButton.toString(),
    'show-reset-button': showResetButton.toString(),
    'show-theme-toggle': showThemeToggle.toString(),
    'show-window-buttons': showWindowButtons.toString(),
    'show-tabs': showTabs.toString(),
    'allow-tab-close': allowTabClose.toString(),
    'allow-tab-add': allowTabAdd.toString(),
    'active-tab': activeTab,
    title,
    ...props
  };

  return (
    <terminal-session
      ref={terminalRef}
      {...webComponentProps}
    />
  );
}
```

### 2. Handle SSR Issues

Web components may have issues with server-side rendering. Create a safe wrapper:

```javascript
// src/components/SafeTerminalSession.js
import React, { lazy, Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const TerminalSession = lazy(() => import('./TerminalSession'));

export default function SafeTerminalSession(props) {
  // For Docusaurus
  if (typeof BrowserOnly !== 'undefined') {
    return (
      <BrowserOnly fallback={<div>Loading terminal...</div>}>
        {() => {
          const Terminal = require('./TerminalSession').default;
          return <Terminal {...props} />;
        }}
      </BrowserOnly>
    );
  }
  
  // For regular React apps
  return (
    <Suspense fallback={<div>Loading terminal...</div>}>
      <TerminalSession {...props} />
    </Suspense>
  );
}
```

## Docusaurus-Specific Setup

### 1. Register Component Globally

Create or edit `src/theme/MDXComponents.js`:

```javascript
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import TerminalSession from '@site/src/components/SafeTerminalSession';

export default {
  ...MDXComponents,
  TerminalSession,
};
```

### 2. TypeScript Support

Create `src/types/terminal-session.d.ts`:

```typescript
declare module 'svelte-terminal-session' {
  export interface SessionStep {
    type: 'command' | 'output' | 'error' | 'warning' | 'info' | 'success';
    content: string;
    delay?: number;
    prompt?: string;
    typingSpeed?: number;
    skipTyping?: boolean;
  }

  export interface TerminalColors {
    background?: string;
    foreground?: string;
    border?: string;
    headerBg?: string;
    headerFg?: string;
    prompt?: string;
    command?: string;
    output?: string;
    error?: string;
    warning?: string;
    info?: string;
    success?: string;
    selection?: string;
    cursor?: string;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'terminal-session': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      theme?: string;
      autoplay?: string;
      'playback-speed'?: number;
      'typing-speed'?: number;
      'enable-typing'?: string;
      'show-header'?: string;
      'show-play-button'?: string;
      'show-reset-button'?: string;
      'show-theme-toggle'?: string;
      title?: string;
      session?: any;
      colors?: any;
    };
  }
}
```

## Usage Examples

### In MDX Documentation

```mdx
---
title: API Documentation
---

import TerminalSession from '@site/src/components/SafeTerminalSession';

## Installation Example

<TerminalSession
  theme="dark"
  autoplay={true}
  typingSpeed={60}
  title="Installation"
  session={[
    { type: 'command', content: 'npm install my-awesome-package' },
    { type: 'output', content: 'npm: installing dependencies...' },
    { type: 'success', content: '✓ Successfully installed my-awesome-package@1.0.0' },
    { type: 'info', content: '3 packages added, 0 removed' }
  ]}
/>

## Toolbar Customization Examples

### Hide Specific Buttons
<TerminalSession
  theme="light"
  showThemeToggle={false}
  showResetButton={false}
  title="Simple Output"
  session={[
    { type: 'output', content: 'This terminal has limited controls' }
  ]}
/>

### Completely Hidden Header
<TerminalSession
  theme="dark"
  showHeader={false}
  autoplay={true}
  session={[
    { type: 'command', content: 'echo "Clean terminal without header"' },
    { type: 'output', content: 'Clean terminal without header' }
  ]}
/>

### Only Window Buttons (No Controls)
<TerminalSession
  theme="dark"
  showPlayButton={false}
  showResetButton={false}
  showThemeToggle={false}
  title="Window Only"
  session={[
    { type: 'info', content: 'Terminal with window buttons only' }
  ]}
/>

## Tab Support Examples

### Multiple Terminal Sessions
<TerminalSession
  showTabs={true}
  allowTabClose={true}
  allowTabAdd={false}
  tabs={[
    {
      id: 'setup',
      title: 'Setup',
      session: [
        { type: 'command', content: 'npm install' },
        { type: 'output', content: 'Installing dependencies...' },
        { type: 'success', content: '✓ Dependencies installed' }
      ]
    },
    {
      id: 'build',
      title: 'Build',
      session: [
        { type: 'command', content: 'npm run build' },
        { type: 'output', content: 'Building application...' },
        { type: 'success', content: '✓ Build complete' }
      ]
    }
  ]}
/>

### Typing Animation Control
<TerminalSession
  enableTyping={true}
  typingSpeed={80}
  autoplay={true}
  session={[
    { type: 'command', content: 'git clone https://github.com/user/repo.git', typingSpeed: 120 },
    { type: 'output', content: 'Cloning into repo...', skipTyping: true },
    { type: 'command', content: 'cd repo && npm install', delay: 1000 },
    { type: 'success', content: 'Ready to develop!', delay: 500 }
  ]}
/>
```

### In React Components

```jsx
import React, { useState } from 'react';
import TerminalSession from './components/SafeTerminalSession';

function MyComponent() {
  const [session] = useState([
    { type: 'command', content: 'git status', typingSpeed: 80 },
    { type: 'output', content: 'On branch main\nYour branch is up to date.' },
    { type: 'command', content: 'git add .', delay: 1000 },
    { type: 'success', content: 'Changes staged for commit' }
  ]);

  const customColors = {
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    command: '#94e2d5',
    success: '#a6e3a1'
  };

  return (
    <div>
      <h2>Git Workflow Demo</h2>
      <TerminalSession
        session={session}
        theme="dark"
        autoplay={true}
        colors={customColors}
        title="Git Demo"
      />
    </div>
  );
}
```

### Dynamic Session Updates

```jsx
import React, { useState } from 'react';
import TerminalSession from './components/SafeTerminalSession';

function InteractiveDemo() {
  const [session, setSession] = useState([]);
  
  const runCommand = (command) => {
    setSession(prev => [
      ...prev,
      { type: 'command', content: command },
      { type: 'output', content: 'Processing...' },
      { type: 'success', content: 'Done!' }
    ]);
  };

  return (
    <div>
      <button onClick={() => runCommand('npm test')}>
        Run Tests
      </button>
      <TerminalSession
        session={session}
        autoplay={true}
        enableTyping={true}
      />
    </div>
  );
}
```

## Configuration Options

### Props Reference

#### Core Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `session` | `SessionStep[]` | `[]` | Array of terminal steps to display |
| `theme` | `'light' \| 'dark' \| 'auto'` | `'dark'` | Color theme |
| `autoplay` | `boolean` | `false` | Start playback automatically |
| `playbackSpeed` | `number` | `1` | Playback speed multiplier |
| `title` | `string` | `'Terminal'` | Terminal window title |
| `colors` | `TerminalColors` | `{}` | Custom color overrides |

#### Typing Animation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableTyping` | `boolean` | `true` | Enable typing animation for commands |
| `typingSpeed` | `number` | `40` | Characters per second for typing effect |

#### Header & Controls
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showHeader` | `boolean` | `true` | Show entire terminal header |
| `showPlayButton` | `boolean` | `true` | Show play/pause button |
| `showResetButton` | `boolean` | `true` | Show reset button |
| `showThemeToggle` | `boolean` | `true` | Show theme toggle button |
| `showWindowButtons` | `boolean` | `true` | Show window control buttons |

#### Tab Support
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabConfig[]` | `[]` | Array of tab configurations |
| `showTabs` | `boolean` | `false` | Enable tab functionality |
| `activeTab` | `number` | `0` | Index of initially active tab |
| `allowTabClose` | `boolean` | `true` | Allow closing tabs |
| `allowTabAdd` | `boolean` | `false` | Show add new tab button |

### Session Step Structure

```typescript
interface SessionStep {
  type: 'command' | 'output' | 'error' | 'warning' | 'info' | 'success';
  content: string;
  delay?: number;        // Delay before showing (ms)
  prompt?: string;       // Custom prompt (default: '$')
  typingSpeed?: number;  // Override typing speed for this step
  skipTyping?: boolean;  // Skip typing animation for this command
  timestamp?: number;    // Internal timestamp for playback
}
```

### Tab Configuration Structure

```typescript
interface TabConfig {
  id: string;           // Unique tab identifier
  title: string;        // Tab display name
  session: SessionStep[]; // Terminal session for this tab
  icon?: string;        // Optional icon/emoji for tab
  closable?: boolean;   // Override global closable setting
  badge?: string | number; // Optional badge (e.g., error count)
  status?: 'idle' | 'running' | 'success' | 'error'; // Visual status indicator
}
```

### Color Scheme Structure

```typescript
interface ColorScheme {
  background: string;   // Terminal background color
  foreground: string;   // Default text color
  border: string;       // Border color
  headerBg: string;     // Header background
  headerFg: string;     // Header text color
  prompt: string;       // Prompt color
  command: string;      // Command text color
  output: string;       // Output text color
  error: string;        // Error text color
  warning: string;      // Warning text color
  info: string;         // Info text color
  success: string;      // Success text color
  selection: string;    // Text selection color
  cursor: string;       // Cursor color
}
```

## Troubleshooting

### Component Not Rendering

1. Ensure the web component is imported before use:
```javascript
import 'svelte-terminal-session';
```

2. Use `BrowserOnly` wrapper in Docusaurus to avoid SSR issues

3. Check browser console for any loading errors

### Props Not Updating

- Complex props (session, colors) must be set as properties, not attributes
- The React wrapper handles this conversion automatically

### TypeScript Errors

- Ensure the type definitions file is in your `tsconfig.json` include path
- Add the global JSX namespace declaration for the custom element

### Styling Issues

- The component uses CSS custom properties for theming
- Ensure your global styles don't override the component's internal styles
- Use the `colors` prop to customize appearance

## Advanced Usage

### Custom Event Handling

```javascript
useEffect(() => {
  const terminal = terminalRef.current;
  if (!terminal) return;

  const handleThemeChange = (e) => {
    console.log('Theme changed to:', e.detail);
  };

  terminal.addEventListener('theme-change', handleThemeChange);
  
  return () => {
    terminal.removeEventListener('theme-change', handleThemeChange);
  };
}, []);
```

### Programmatic Control

```javascript
const terminalRef = useRef(null);

const handlePlay = () => {
  terminalRef.current?.togglePlayback();
};

const handleReset = () => {
  terminalRef.current?.resetPlayback();
};
```

## License

MIT