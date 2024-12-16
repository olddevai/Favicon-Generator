import React from 'react';
import type { ManifestData } from '../types';

interface Props {
  data: ManifestData;
  onChange: (data: ManifestData) => void;
}

export function ManifestForm({ data, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Short Name</label>
        <input
          type="text"
          name="shortName"
          value={data.shortName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Theme Color</label>
          <input
            type="color"
            name="themeColor"
            value={data.themeColor}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Background Color</label>
          <input
            type="color"
            name="backgroundColor"
            value={data.backgroundColor}
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
      </div>
    </div>
  );
}