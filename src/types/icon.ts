export interface IconSize {
  width: number;
  height: number;
  label: string;
}

export interface IconPreview {
  size: string;
  url: string;
}

export interface GeneratedIcon {
  url: string;
  size: IconSize;
}