
import React from 'react';
import { Platform } from '../types';

interface PlatformCardProps {
  platform: Platform;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ platform, isSelected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(platform.id)}
      className={`flex flex-col items-center p-6 rounded-2xl transition-all duration-300 border-2 text-left w-full
        ${isSelected 
          ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
          : 'border-transparent bg-white shadow-sm hover:shadow-md hover:border-slate-200'}`}
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${platform.color}`}>
        <i className={`${platform.icon} text-2xl`}></i>
      </div>
      <h3 className="text-lg font-bold mb-1">{platform.name}</h3>
      <div className="flex flex-wrap gap-1 justify-center">
        {platform.pros.slice(0, 2).map((pro, i) => (
          <span key={i} className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600 uppercase tracking-wider font-semibold">
            {pro.split(' ')[0]}
          </span>
        ))}
      </div>
    </button>
  );
};

export default PlatformCard;
