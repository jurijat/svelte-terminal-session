import type { ColorScheme } from './types';

export const darkTheme: ColorScheme = {
  background: '#0d1117',
  foreground: '#c9d1d9',
  border: '#30363d',
  headerBg: '#161b22',
  headerFg: '#8b949e',
  prompt: '#58a6ff',
  command: '#79c0ff',
  output: '#c9d1d9',
  error: '#ff7b72',
  warning: '#ffa657',
  info: '#58a6ff',
  success: '#56d364',
  selection: '#264f78',
  cursor: '#58a6ff',
};

export const lightTheme: ColorScheme = {
  background: '#ffffff',
  foreground: '#24292f',
  border: '#d0d7de',
  headerBg: '#f6f8fa',
  headerFg: '#57606a',
  prompt: '#0969da',
  command: '#0550ae',
  output: '#24292f',
  error: '#cf222e',
  warning: '#9a6700',
  info: '#0969da',
  success: '#1a7f37',
  selection: '#b6e3ff',
  cursor: '#0969da',
};

export function applyTheme(colors: ColorScheme, element: HTMLElement) {
  const style = element.style;
  style.setProperty('--terminal-bg', colors.background);
  style.setProperty('--terminal-fg', colors.foreground);
  style.setProperty('--terminal-border', colors.border);
  style.setProperty('--terminal-header-bg', colors.headerBg);
  style.setProperty('--terminal-header-fg', colors.headerFg);
  style.setProperty('--terminal-prompt', colors.prompt);
  style.setProperty('--terminal-command', colors.command);
  style.setProperty('--terminal-output', colors.output);
  style.setProperty('--terminal-error', colors.error);
  style.setProperty('--terminal-warning', colors.warning);
  style.setProperty('--terminal-info', colors.info);
  style.setProperty('--terminal-success', colors.success);
  style.setProperty('--terminal-selection', colors.selection);
  style.setProperty('--terminal-cursor', colors.cursor);
}

export function mergeColors(base: ColorScheme, overrides?: Partial<ColorScheme>): ColorScheme {
  return { ...base, ...overrides };
}