import React from 'react';
import { Upload } from 'lucide-react';

interface Props {
  onFileSelect: (file: File) => void;
}

export function ImageUpload({ onFileSelect }: Props) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onFileSelect(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div
      className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-lg mb-2">Drag and drop your image here</p>
      <p className="text-sm text-gray-500 mb-4">or</p>
      <label className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
        Choose File
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
      </label>
    </div>
  );
}