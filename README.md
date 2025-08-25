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

## Framework Integration

### React/Next.js
See [DOCUSAURUS_INTEGRATION.md](./DOCUSAURUS_INTEGRATION.md) for detailed React integration guide.

### Vue.js
```javascript
// In your Vue component
import 'svelte-terminal-session';

export default {
  mounted() {
    this.$refs.terminal.session = [
      { type: 'command', content: 'vue --version' },
      { type: 'output', content: '@vue/cli 5.0.8' }
    ];
  }
}
```

### Angular
```typescript
// In your Angular component
import 'svelte-terminal-session';

export class MyComponent implements AfterViewInit {
  @ViewChild('terminal', { static: false }) terminal!: ElementRef;
  
  ngAfterViewInit() {
    this.terminal.nativeElement.session = [
      { type: 'command', content: 'ng version' },
      { type: 'success', content: 'Angular CLI: 15.2.4' }
    ];
  }
}
```

## Examples

### Git Workflow Demo
```html
<terminal-session 
  id="git-demo"
  theme="dark" 
  autoplay="true"
  enable-typing="true"
  title="Git Workflow"
></terminal-session>

<script>
document.getElementById('git-demo').session = [
  { type: 'command', content: 'git status', delay: 500 },
  { type: 'output', content: 'On branch main\nYour branch is up to date with origin/main.' },
  { type: 'command', content: 'git add .', delay: 1000 },
  { type: 'command', content: 'git commit -m "Add new feature"', delay: 500 },
  { type: 'success', content: '[main abc1234] Add new feature\n 3 files changed, 45 insertions(+)' },
  { type: 'command', content: 'git push origin main', delay: 800 },
  { type: 'success', content: '✓ Successfully pushed to origin/main' }
];
</script>
```

### Error Handling Example
```html
<terminal-session id="error-demo" theme="dark"></terminal-session>

<script>
document.getElementById('error-demo').session = [
  { type: 'command', content: 'npm run build' },
  { type: 'output', content: 'Building application...' },
  { type: 'error', content: 'ERROR: Module not found: Cannot resolve ./missing-file.js' },
  { type: 'warning', content: 'Build failed with 1 error' },
  { type: 'command', content: 'npm run fix', delay: 2000 },
  { type: 'success', content: '✓ All issues resolved!' }
];
</script>
```

### Development Workflow with Tabs
```html
<terminal-session 
  id="dev-workflow"
  show-tabs="true"
  allow-tab-close="true"
></terminal-session>

<script>
const terminal = document.getElementById('dev-workflow');
terminal.tabs = [
  {
    id: 'install',
    title: '📦 Install',
    session: [
      { type: 'command', content: 'npm install' },
      { type: 'output', content: 'added 234 packages in 12s' },
      { type: 'success', content: '✓ Dependencies installed' }
    ]
  },
  {
    id: 'dev',
    title: '🚀 Dev Server', 
    badge: 'running',
    status: 'running',
    session: [
      { type: 'command', content: 'npm run dev' },
      { type: 'info', content: 'Local:   http://localhost:3000' },
      { type: 'info', content: 'Network: http://192.168.1.100:3000' },
      { type: 'success', content: '✓ Development server started' }
    ]
  },
  {
    id: 'test',
    title: '🧪 Tests',
    session: [
      { type: 'command', content: 'npm test' },
      { type: 'output', content: 'Running tests...' },
      { type: 'success', content: '✓ All tests passed (23 tests)' }
    ]
  }
];
</script>
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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`) 
5. Open a Pull Request

## License

MIT - see [LICENSE](./LICENSE) for details.
