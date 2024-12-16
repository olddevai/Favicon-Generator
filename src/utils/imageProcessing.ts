export async function createImagePreview(file: File, size: number): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, size, size);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function generateManifest(data: ManifestData): string {
  return JSON.stringify({
    name: data.name,
    short_name: data.shortName,
    description: data.description,
    theme_color: data.themeColor,
    background_color: data.backgroundColor,
    display: "standalone",
    icons: [
      {
        src: "icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }, null, 2);
}