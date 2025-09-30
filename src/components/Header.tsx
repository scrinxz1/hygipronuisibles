import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-emerald-800 via-green-900 to-emerald-800 shadow-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/ChatGPT Image 25 sept. 2025, 15_07_08 copy.png" 
              alt="Hygipro Nuisibles Logo" 
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <div className="text-xl font-bold text-white">Hygipro Nuisibles</div>
              <div className="text-sm font-medium text-red-400">Experts en dératisation</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm text-gray-400 font-medium">Urgence 7/7 24h/24</div>
              <a href="tel:0174747847" className="text-xl font-bold text-green-400 hover:text-green-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                01 74 74 78 47
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;