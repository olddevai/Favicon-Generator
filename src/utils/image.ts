import { createCanvas, drawImageToCanvas } from './canvas';
import { readFileAsDataURL } from './file';
import type { IconSize } from '../types/icon';

export async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function createImagePreview(file: File, size: IconSize): Promise<string> {
  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImage(dataUrl);
  const canvas = createCanvas(size.width, size.height);
  drawImageToCanvas(canvas, img);
  return canvas.toDataURL('image/png');
}