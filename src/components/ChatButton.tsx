import React, { useState } from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import ChatBot from './ChatBot';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Bouton flottant */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className="group relative w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
          
          {/* Badge notification */}
          <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-4 sm:w-6 h-4 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Zap className="w-2 sm:w-3 h-2 sm:h-3 text-white" />
          </div>
          
          {/* Effet de pulsation */}
          <div className="absolute inset-0 rounded-full bg-red-600 opacity-30 animate-ping"></div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap">
            💬 Besoin d'aide ? Chat 24h/24
            <div className="absolute top-full right-2 sm:right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Chat Bot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default ChatButton;