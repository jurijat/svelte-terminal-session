# Terminal Session Web Component

A powerful, themeable terminal session recorder/player web component built with Svelte 5.

## Features

- **🎭 Advanced Theming** - Light/dark/auto themes with full color customization
- **⚡ Realistic Typing** - Configurable typing animations with per-step control
- **🎮 Flexible Controls** - Granular control over play, pause, reset, and theme toggle buttons
- **📑 Multi-Tab Support** - Multiple terminal sessions with background processing simulation
- **🪟 Header Customization** - Show/hide entire header, individual buttons, or window controls
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices
- **🚀 High Performance** - Built with Svelte 5 for optimal speed and bundle size
- **🔧 Framework Agnostic** - Works with React, Vue, Angular, or vanilla JavaScript
- **♿ Accessibility** - Proper ARIA labels and keyboard navigation support
- **🎯 Developer Friendly** - TypeScript support with comprehensive type definitions

## Installation

```bash
npm install svelte-terminal-session
```

## Quick Start

### Basic Example

```html
<terminal-session id="my-terminal"></terminal-session>

<script>
  const terminal = document.getElementById("my-terminal");
  terminal.session = [
    { type: "command", content: "npm install", delay: 500 },
    { type: "output", content: "Installing dependencies...", delay: 1000 },
    { type: "success", content: "✓ Dependencies installed!", delay: 500 },
  ];
</script>
```

### Advanced Configuration

```html
<terminal-session
  theme="dark"
  autoplay="true"
  enable-typing="true"
  typing-speed="60"
  playback-speed="1.2"
  title="Development Workflow"
  show-theme-toggle="false"
></terminal-session>
```

### Minimal Terminal (No Header)

```html
<terminal-session
  show-header="false"
  autoplay="true"
  theme="dark"
></terminal-session>
```

### Multi-Tab Terminal

```html
<terminal-session
  id="tabbed-terminal" 
  show-tabs="true"
  allow-tab-close="true"
></terminal-session>

<script>
  const terminal = document.getElementById("tabbed-terminal");
  terminal.tabs = [
    {
      id: "dev",
      title: "Development",
      session: [
        { type: "command", content: "npm run dev" },
        { type: "info", content: "Server running on localhost:3000" }
      ]
    },
    {
      id: "build", 
      title: "Build",
      session: [
        { type: "command", content: "npm run build" },
        { type: "success", content: "Build completed successfully!" }
      ]
    }
  ];
</script>
```

## Configuration

### Core Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `'light' \| 'dark' \| 'auto'` | `'dark'` | Color theme |
| `session` | `SessionStep[]` | `[]` | Array of terminal steps |
| `autoplay` | `boolean` | `false` | Auto-start playback when visible |
| `playbackSpeed` | `number` | `1` | Playback speed multiplier |
| `title` | `string` | `'Terminal'` | Window title |
| `colors` | `Partial<ColorScheme>` | `{}` | Custom color overrides |

### Typing Animation

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enableTyping` | `boolean` | `true` | Enable typing animations |
| `typingSpeed` | `number` | `40` | Characters per second |

### Header & Controls

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `showHeader` | `boolean` | `true` | Show entire header |
| `showPlayButton` | `boolean` | `true` | Show play/pause button |
| `showResetButton` | `boolean` | `true` | Show reset button |
| `showThemeToggle` | `boolean` | `true` | Show theme toggle |
| `showWindowButtons` | `boolean` | `true` | Show window controls |

### Tab Support

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | `TabConfig[]` | `[]` | Tab configurations |
| `showTabs` | `boolean` | `false` | Enable tabs |
| `activeTab` | `number` | `0` | Initial active tab |
| `allowTabClose` | `boolean` | `true` | Allow closing tabs |
| `allowTabAdd` | `boolean` | `false` | Show add tab button |

## Data Structures

### SessionStep

```typescript
interface SessionStep {
  type: "command" | "output" | "error" | "warning" | "info" | "success";
  content: string;
  delay?: number;        // Delay before showing (ms)
  prompt?: string;       // Custom prompt (default: '$')
  typingSpeed?: number;  // Override typing speed for this step
  skipTyping?: boolean;  // Skip typing animation
  timestamp?: number;    // Internal timestamp
}
```

### TabConfig

```typescript
interface TabConfig {
  id: string;                    // Unique identifier
  title: string;                 // Display name
  session: SessionStep[];        // Terminal session
  icon?: string;                 // Optional icon/emoji
  closable?: boolean;           // Override global closable setting
  badge?: string | number;      // Optional badge
  status?: 'idle' | 'running' | 'success' | 'error'; // Status indicator
}
```

## Theming & Colors

Override any color in the theme:

```javascript
const terminal = document.getElementById('my-terminal');
terminal.colors = {
  background: "#1e1e2e",
  foreground: "#cdd6f4", 
  prompt: "#89b4fa",
  command: "#94e2d5",
  output: "#cdd6f4",
  success: "#a6e3a1",
  warning: "#f9e2af",
  error: "#f38ba8",
  info: "#89dceb"
};
```

### Available Color Properties

```typescript
interface ColorScheme {
  background: string;   // Terminal background
  foreground: string;   // Default text color  
  border: string;       // Border color
  headerBg: string;     // Header background
  headerFg: string;     // Header text
  prompt: string;       // Prompt symbol
  command: string;      // Command text
  output: string;       // Output text
  error: string;        // Error messages
  warning: string;      // Warning messages
  info: string;         // Info messages
  success: string;      // Success messages
  selection: string;    // Text selection
  cursor: string;       // Cursor color
}
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build library
npm run build

# Type check
npm run check
```

## License

MIT
