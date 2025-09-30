import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      <div className="relative">
        <img 
          src="/ChatGPT Image 25 sept. 2025, 15_07_08 copy.png" 
          alt="Hygipro Nuisibles Logo" 
          className="w-12 h-12 rounded-lg object-cover"
        />
      </div>
      <div>
        <div className="text-xl font-bold text-white">
          Hygipro Nuisibles
        </div>
        <div className="text-sm font-medium text-red-400">
          Experts en dératisation & nuisibles
        </div>
      </div>
    </div>
  );
};

export default Logo;