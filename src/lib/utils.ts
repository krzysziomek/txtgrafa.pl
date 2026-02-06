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
    return `/pliki/${category}/${filename}`;
  }
  
  // For zip files, ensure they have proper extension
  if (!filename.endsWith('.zip')) {
    throw new Error('Invalid file type');
  }
  
  return `/pliki/${category}/${encodeURIComponent(filename)}`;
}

export function stripColorCodes(text: string): string {
  return text.replace(/§[0-9a-fk-or]/gi, '');
}

// Helper to check if a file is a valid HTML redirect file
export function isValidHtmlRedirect(filename: string): boolean {
  return VALID_HTML_FILES.includes(filename as typeof VALID_HTML_FILES[number]);
}