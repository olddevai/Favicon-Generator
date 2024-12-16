export interface ManifestData {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
  display: 'standalone' | 'minimal-ui' | 'fullscreen' | 'browser';
  orientation: 'any' | 'natural' | 'portrait' | 'landscape';
}

export interface ManifestIcon {
  src: string;
  sizes: string;
  type: string;
  purpose?: string;
}