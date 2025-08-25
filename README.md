# Terminal Session Web Component

A themeable terminal session recorder/player web component built with Svelte 5.

## Features

- **Themeable** - Light/dark themes with customizable colors
- **Playback Control** - Play, pause, and reset session recordings
- **Multiple Step Types** - Command, output, error, warning, info, success
- **Performant** - Built with Svelte 5 for optimal performance
- **Web Component** - Works with any framework or vanilla JS
- **Customizable** - Configurable speed, colors, and behavior

## Installation

```bash
npm install svelte-terminal-session
```

## Usage

### Basic Usage

```html
<terminal-session id="my-terminal"></terminal-session>

<script>
  const terminal = document.getElementById("my-terminal");
  terminal.session = [
    { type: "command", content: "npm install", delay: 500 },
    { type: "output", content: "Installing dependencies...", delay: 1000 },
    { type: "success", content: "Dependencies installed!", delay: 500 },
  ];
</script>
```

### With Attributes

```html
<terminal-session
  theme="dark"
  autoplay="true"
  playback-speed="1.5"
  title="Build Process"
  show-header="true"
></terminal-session>
```

## Properties

| Property        | Type                          | Default      | Description                        |
| --------------- | ----------------------------- | ------------ | ---------------------------------- |
| `theme`         | `'light' \| 'dark' \| 'auto'` | `'dark'`     | Color theme                        |
| `session`       | `SessionStep[]`               | `[]`         | Array of session steps to display  |
| `autoplay`      | `boolean`                     | `false`      | Start playback automatically       |
| `playbackSpeed` | `number`                      | `1`          | Playback speed multiplier          |
| `showHeader`    | `boolean`                     | `true`       | Show terminal header with controls |
| `title`         | `string`                      | `'Terminal'` | Terminal window title              |
| `colors`        | `Partial<ColorScheme>`        | `{}`         | Custom color overrides             |

## Session Step Types

```typescript
interface SessionStep {
  type: "command" | "output" | "error" | "warning" | "info" | "success";
  content: string;
  delay?: number; // Delay before showing this step (ms)
  prompt?: string; // Custom prompt for commands (default: '$')
}
```

## Custom Colors

Override any color in the theme:

```javascript
terminal.colors = {
  background: "#1e1e2e",
  foreground: "#cdd6f4",
  prompt: "#89b4fa",
  command: "#94e2d5",
  success: "#a6e3a1",
  warning: "#f9e2af",
  error: "#f38ba8",
};
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
