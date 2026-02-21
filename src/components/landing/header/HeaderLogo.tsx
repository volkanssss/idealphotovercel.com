'use client';

import React from 'react';
import Link from 'next/link';

const HeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="/lovable-uploads/95c01b04-2c56-4d10-8223-831f4995f862.png"
          alt="İdeal Photo Logo"
          className="h-10 w-10 rounded-full object-contain"
        />
        <span className="text-2xl font-bold text-pink-500">
          İdeal Photo
        </span>
      </Link>
    </div>
  );
};

export default HeaderLogo;
