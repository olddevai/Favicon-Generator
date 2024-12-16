import React, { useState } from 'react';
import { ImageUpload } from './components/ImageUpload';
import { IconPreview } from './components/IconPreview';
import { ManifestForm } from './components/ManifestForm';
import { createImagePreview, generateManifest } from './utils/imageProcessing';
import type { IconPreview as IconPreviewType, ManifestData } from './types';
import { Download } from 'lucide-react';

function App() {
  const [previews, setPreviews] = useState<IconPreviewType[]>([]);
  const [manifestData, setManifestData] = useState<ManifestData>({
    name: 'My App',
    shortName: 'App',
    description: 'A fantastic web application',
    themeColor: '#ffffff',
    backgroundColor: '#ffffff',
  });

  const handleFileSelect = async (file: File) => {
    const sizes = [16, 32, 48, 192, 512];
    const newPreviews = await Promise.all(
      sizes.map(async (size) => ({
        size: `${size}x${size}`,
        url: await createImagePreview(file, size),
      }))
    );
    setPreviews(newPreviews);
  };

  const handleDownload = () => {
    const manifest = generateManifest(manifestData);
    const blob = new Blob([manifest], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'manifest.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Favicon Generator
          </h1>
          <p className="text-lg text-gray-600">
            Generate favicons and app icons for your web application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
              <ImageUpload onFileSelect={handleFileSelect} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Manifest Settings</h2>
              <ManifestForm data={manifestData} onChange={setManifestData} />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Preview</h2>
                {previews.length > 0 && (
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Manifest
                  </button>
                )}
              </div>
              {previews.length > 0 ? (
                <IconPreview previews={previews} />
              ) : (
                <p className="text-center text-gray-500 py-12">
                  Upload an image to see previews
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;