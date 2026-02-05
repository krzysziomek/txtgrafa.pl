export interface FileItem {
  display: string;
  file: string;
}

export interface CategoryData {
  [key: string]: FileItem[];
}

export type CategoryKey = 'overlay' | 'ramki' | 'pozostale';

export interface NavItem {
  label: string;
  path: string;
  variant?: 'default' | 'active';
}

export interface DownloadOption {
  category: CategoryKey;
  file: string;
}