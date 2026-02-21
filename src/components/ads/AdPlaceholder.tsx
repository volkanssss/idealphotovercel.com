'use client';


import React from 'react';

interface AdPlaceholderProps {
  size?: 'banner' | 'rectangle' | 'leaderboard' | 'skyscraper';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ size = 'banner', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'banner':
        return 'w-full h-24 md:h-32';
      case 'rectangle':
        return 'w-80 h-64';
      case 'leaderboard':
        return 'w-full h-20 md:h-24';
      case 'skyscraper':
        return 'w-40 h-96';
      default:
        return 'w-full h-24';
    }
  };

  return (
    <div className={`${getSizeClasses()} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm ${className}`}>
      <div className="text-center">
        <div className="font-medium">Advertisement</div>
        <div className="text-xs mt-1">AdSense Placeholder</div>
      </div>
    </div>
  );
};

export default AdPlaceholder;
