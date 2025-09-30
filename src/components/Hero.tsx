import React from 'react';
import { Phone, Clock, MapPin, FileText, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-slate-50 via-white to-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 rounded-full px-6 py-3 shadow-lg">
                <Shield className="w-5 h-5 text-white mr-2" />
                <span className="text-white font-semibold text-sm">Experts Certifiés • 7j/7 24h/24</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                <span className="text-gray-800">Élimination</span>
                <br />
                <span className="text-red-600">Professionnelle</span>
                <br />
                <span className="text-gray-700 text-2xl md:text-4xl">des Nuisibles</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-800">Dératisation • Désinsectisation • Destruction nids</span>
                <br />
                <span className="text-green-600 font-bold">Intervention rapide Paris & Caen</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0174747847"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Appelez maintenant</span>
              </a>
              
              <a
                href="mailto:hygopro@nuisible.fr"
                className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>Devis gratuit</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl shadow-lg">
                <Clock className="w-12 h-12 text-green-600" />
                <div>
                  <div className="font-semibold text-gray-900">Disponible 7j/7</div>
                  <div className="text-sm text-gray-600">24h/24 pour urgences</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/80 p-4 rounded-xl shadow-lg">
                <MapPin className="w-12 h-12 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Paris & Caen</div>
                  <div className="text-sm text-gray-600">Intervention rapide</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                INTERVENTION D'URGENCE
              </div>
              <h3 className="text-2xl font-bold text-black">Contactez-nous</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                <span className="font-semibold text-gray-900">Téléphone :</span>
                <a href="tel:0174747847" className="text-xl font-bold text-red-600">
                  01 74 74 78 47
                </a>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                <span className="font-semibold text-gray-900">Email :</span>
                <a href="mailto:hygopro@nuisible.fr" className="text-base font-semibold text-blue-600">
                  hygopro@nuisible.fr
                </a>
              </div>

              <div className="p-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-center">
                <div className="text-white font-bold text-lg mb-2">DEVIS GRATUIT</div>
                <div className="text-green-100 font-semibold text-sm">Sans engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;