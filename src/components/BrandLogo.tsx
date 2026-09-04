import React from 'react';
import { IMAGES } from '../data/images';

interface BrandLogoProps {
  variant?: 'compact' | 'full' | 'banner';
  theme?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'compact',
  theme = 'light',
  className = '',
  onClick
}) => {
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer group select-none ${className}`}
      id="brand-logo-container"
    >
      {/* Exact uploaded logo image */}
      <img
        src={IMAGES.logo}
        alt="Sabra's Termite Pest Weed Control Official Logo"
        referrerPolicy="no-referrer"
        className="h-10 sm:h-12 w-auto object-contain rounded-md shadow-xs"
      />
      <div className="flex flex-col">
        <span className={`text-base sm:text-lg font-black tracking-tight uppercase leading-tight ${isDark ? 'text-white' : 'text-slate-950'}`}>
          Sabra<span className="text-red-600">'s</span>
        </span>
        <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Termite Pest Weed Control
        </span>
      </div>
    </div>
  );
};

