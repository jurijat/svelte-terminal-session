export type SessionStepType =
  | "command"
  | "output"
  | "error"
  | "warning"
  | "info"
  | "success";

export interface SessionStep {
  type: SessionStepType;
  content: string;
  timestamp?: number;
  delay?: number;
  prompt?: string;
  typingSpeed?: number; // Override global typing speed for this step (chars per second)
  skipTyping?: boolean; // Skip typing effect for this specific command
}

export type Theme = "light" | "dark" | "auto";

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

export interface TabConfig {
  id: string;
  title: string;
  session: SessionStep[];
  icon?: string; // Optional icon/emoji for tab
  closable?: boolean; // Override global closable setting for this tab
  badge?: string | number; // Optional badge (e.g., error count)
  status?: 'idle' | 'running' | 'success' | 'error'; // Visual status indicator
}

export interface TabState {
  currentStepIndex: number;
  isPlaying: boolean;
  displayedSteps: SessionStep[];
  typingStepIndex: number;
  typedContent: string;
  lastUpdateTime: number; // Timestamp when state was saved
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
  showPlayButton?: boolean; // Show/hide play button (default: true)
  showResetButton?: boolean; // Show/hide reset button (default: true)
  showThemeToggle?: boolean; // Show/hide theme toggle button (default: true)
  // Tab-related props
  tabs?: TabConfig[];
  activeTab?: number;
  showTabs?: boolean;
  allowTabClose?: boolean; // Global setting for all tabs
  allowTabAdd?: boolean; // Show add tab button
  tabBarPosition?: 'top' | 'bottom'; // Tab bar position
}
