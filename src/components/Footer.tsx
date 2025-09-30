import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/-ChatGPT Image 25 sept. 2025, 15_07_08 copy copy.png" 
                alt="Hygipro Nuisibles Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <div className="text-xl font-bold">Hygipro Nuisibles</div>
                <div className="text-sm text-green-400">STOP AUX ENVAHISSEURS</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Solutions professionnelles contre tous types de nuisibles.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Contact</h3>
            <div className="space-y-3">
              <a href="tel:0174747847" className="flex items-center space-x-3 hover:text-green-400">
                <Phone className="w-4 h-4" />
                <span>01 74 74 78 47</span>
              </a>
              <a href="mailto:hygopro@nuisible.fr" className="flex items-center space-x-3 hover:text-green-400">
                <Mail className="w-4 h-4" />
                <span>hygopro@nuisible.fr</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Paris & Caen</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Dératisation</li>
              <li>Désinsectisation</li>
              <li>Destruction nids frelons</li>
              <li>Punaises de lit</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-green-400">Urgences</h3>
            <div className="bg-green-600 rounded-lg p-4 text-center">
              <div className="text-lg font-bold mb-2">Intervention immédiate</div>
              <a href="tel:0174747847" className="text-2xl font-bold">
                01 74 74 78 47
              </a>
              <div className="text-sm mt-2">Disponible 24h/24</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Hygipro Nuisibles. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;