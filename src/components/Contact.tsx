import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-400 mb-4">Contact</h2>
          <p className="text-lg text-white">Contactez-nous pour une intervention rapide</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <Phone className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-white text-sm">Téléphone</div>
                <a href="tel:0174747847" className="text-lg font-bold text-green-600">
                  01 74 74 78 47
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <Mail className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-white text-sm">Email</div>
                <a href="mailto:hygopro@nuisible.fr" className="text-sm text-white">
                  hygopro@nuisible.fr
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <MapPin className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-white text-sm">Zones</div>
                <div className="text-sm text-white">Paris & Caen</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
              <div>
                <div className="font-semibold text-white text-sm">Disponibilité</div>
                <div className="text-sm text-white">7j/7 24h/24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;