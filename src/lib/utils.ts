import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9.-]/g, '_');
}

// Valid categories - used for allowlist validation
const VALID_CATEGORIES = ['overlay', 'ramki', 'pozostale'] as const;
type ValidCategory = typeof VALID_CATEGORIES[number];

// Valid HTML files that can be redirected to - hardcoded allowlist
const VALID_HTML_FILES = ['new.html'] as const;

export function getDownloadPath(category: string, filename: string): string {
  // Validate category against allowlist
  if (!VALID_CATEGORIES.includes(category as ValidCategory)) {
    throw new Error('Invalid category');
  }
  
  // Validate filename - prevent directory traversal
  if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
    throw new Error('Invalid filename');
  }
  
  // For HTML files, validate against allowlist
  if (filename.endsWith('.html')) {
    if (!VALID_HTML_FILES.includes(filename as typeof VALID_HTML_FILES[number])) {
      throw new Error('Invalid HTML file');
    }
    // GitHub Pages relative base path resolver
    return `./pliki/${category}/${filename}`;
  }
  
  // For zip files, ensure they have proper extension
  if (!filename.endsWith('.zip')) {
    throw new Error('Invalid file type');
  }
  
  // Return relative paths to support nested paths in GitHub Pages
  return `./pliki/${category}/${encodeURIComponent(filename)}`;
}

export function stripColorCodes(text: string): string {
  // Minecraft color codes parsing: § followed by character
  return text.replace(/§[0-9a-fk-or]/gi, '');
}

// Helper to check if a file is a valid HTML redirect file
export function isValidHtmlRedirect(filename: string): boolean {
  return VALID_HTML_FILES.includes(filename as typeof VALID_HTML_FILES[number]);
}

export interface TextSegment {
  text: string;
  color?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
}

export function parseMinecraftText(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const parts = text.split('§');
  
  let currentColor: string | undefined = undefined;
  let isBold = false;
  let isItalic = false;
  let isUnderline = false;
  let isStrikethrough = false;
  
  if (parts[0]) {
    segments.push({ text: parts[0] });
  }
  
  const colorMap: Record<string, string> = {
    '0': '#000000',
    '1': '#0000aa',
    '2': '#00aa00',
    '3': '#00aaaa',
    '4': '#aa0000',
    '5': '#aa00aa',
    '6': '#ffaa00',
    '7': '#aaaaaa',
    '8': '#555555',
    '9': '#5555ff',
    'a': '#55ff55',
    'b': '#55ffff',
    'c': '#ff5555',
    'd': '#ff55ff',
    'e': '#ffff55',
    'f': '#ffffff',
  };
  
  for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    if (part.length === 0) continue;
    
    const code = part[0].toLowerCase();
    const rest = part.slice(1);
    
    if (colorMap[code] !== undefined) {
      currentColor = colorMap[code];
      isBold = false;
      isItalic = false;
      isUnderline = false;
      isStrikethrough = false;
    } else if (code === 'l') {
      isBold = true;
    } else if (code === 'm') {
      isStrikethrough = true;
    } else if (code === 'n') {
      isUnderline = true;
    } else if (code === 'o') {
      isItalic = true;
    } else if (code === 'r') {
      currentColor = undefined;
      isBold = false;
      isItalic = false;
      isUnderline = false;
      isStrikethrough = false;
    }
    
    if (rest.length > 0) {
      segments.push({
        text: rest,
        color: currentColor,
        bold: isBold,
        italic: isItalic,
        underline: isUnderline,
        strikethrough: isStrikethrough,
      });
    }
  }
  
  return segments;
}