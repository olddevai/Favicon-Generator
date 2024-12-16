import type { IconSize } from '../types/icon';

export const ICON_SIZES: IconSize[] = [
  { width: 16, height: 16, label: 'Favicon (16x16)' },
  { width: 32, height: 32, label: 'Favicon (32x32)' },
  { width: 48, height: 48, label: 'Favicon (48x48)' },
  { width: 192, height: 192, label: 'Android (192x192)' },
  { width: 512, height: 512, label: 'PWA (512x512)' },
];

export const SUPPORTED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/svg+xml'];