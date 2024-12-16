import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export function Card({ title, children, actions }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {(title || actions) && (
        <div className="flex justify-between items-center mb-4">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}