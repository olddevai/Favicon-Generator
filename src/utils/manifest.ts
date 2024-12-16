import type { ManifestData, ManifestIcon } from '../types/manifest';

export function generateManifest(data: ManifestData): string {
  const icons: ManifestIcon[] = [
    {
      src: '/icon-192x192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any maskable',
    },
    {
      src: '/icon-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
  ];

  const manifest = {
    name: data.name,
    short_name: data.shortName,
    description: data.description,
    theme_color: data.themeColor,
    background_color: data.backgroundColor,
    display: data.display,
    orientation: data.orientation,
    icons,
    start_url: '/',
    scope: '/',
  };

  return JSON.stringify(manifest, null, 2);
}