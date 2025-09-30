import React from 'react';
import { MapPin } from 'lucide-react';

const InterventionZones = () => {
  return (
    <section id="zones" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Intervention Rapide</span>
          </h2>
          <p className="text-xl text-white font-medium">
            Paris & Région Parisienne • Caen & ses alentours
          </p>
        </div>

        {/* Vraie carte Google Maps */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 overflow-hidden">
            <div 
              className="rounded-xl h-96 relative overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url('/GOOGLE MAPS cc69d78884d3bea.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Point Paris - Position ajustée selon la vraie carte */}
              <div className="absolute top-32 right-24 group cursor-pointer z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-red-600 rounded-full shadow-lg"></div>
                <div className="absolute -top-10 -left-8 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-red-200">
                  Paris
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
              
              {/* Point Caen - Position ajustée selon la vraie carte */}
              <div className="absolute top-8 left-16 group cursor-pointer z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-0 left-0 w-4 h-4 bg-red-600 rounded-full shadow-lg"></div>
                <div className="absolute -top-10 -left-8 bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300 border border-red-200">
                  Caen
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
              
              {/* Badge central avec info */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Zones d'intervention</div>
                    <div className="text-xs text-gray-700">Paris & région parisienne • Caen & ses alentours</div>
                  </div>
                </div>
              </div>
              
              {/* Badge urgence */}
              <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                🚨 Urgence 24h/24
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterventionZones;