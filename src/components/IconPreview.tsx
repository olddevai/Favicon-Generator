import React from 'react';
import type { IconPreview as IconPreviewType } from '../types';

interface Props {
  previews: IconPreviewType[];
}

export function IconPreview({ previews }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {previews.map(({ size, url }) => (
        <div key={size} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={url}
            alt={`${size} preview`}
            className="mx-auto mb-2"
            style={{ width: '64px', height: '64px' }}
          />
          <p className="text-center text-sm text-gray-600">{size}</p>
        </div>
      ))}
    </div>
  );
}