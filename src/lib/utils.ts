import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9.-]/g, '_');
}

export function getDownloadPath(category: string, filename: string): string {
  if (filename.endsWith('.html')) {
    return `/pliki/${category}/${filename}`;
  }
  return `/pliki/${category}/${encodeURIComponent(filename)}`;
}

export function stripColorCodes(text: string): string {
  return text.replace(/§[0-9a-fk-or]/gi, '');
}