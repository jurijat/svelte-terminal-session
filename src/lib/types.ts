export type SessionStepType = 'command' | 'output' | 'error' | 'warning' | 'info' | 'success';

export interface SessionStep {
  type: SessionStepType;
  content: string;
  timestamp?: number;
  delay?: number;
  prompt?: string;
  typingSpeed?: number; // Override global typing speed for this step (chars per second)
  skipTyping?: boolean; // Skip typing effect for this specific command
}

export type Theme = 'light' | 'dark' | 'auto';

export interface ColorScheme {
  background: string;
  foreground: string;
  border: string;
  headerBg: string;
  headerFg: string;
  prompt: string;
  command: string;
  output: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  selection: string;
  cursor: string;
}

export interface TerminalProps {
  theme?: Theme;
  session?: SessionStep[];
  autoplay?: boolean;
  playbackSpeed?: number;
  showHeader?: boolean;
  title?: string;
  colors?: Partial<ColorScheme>;
  typingSpeed?: number; // Characters per second for typing effect (default: 40)
  enableTyping?: boolean; // Enable typing effect for commands (default: true)
}