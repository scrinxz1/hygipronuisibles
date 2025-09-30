import React from 'react';
import { Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie D.',
    location: 'Paris 15e',
    rating: 5,
    text: 'Intervention très rapide suite à une invasion de rats. Équipe arrivée en 2h un dimanche soir ! Travail impeccable.',
    service: 'Dératisation',
    date: 'Il y a 2 semaines'
  },
  {
    name: 'Jean-Pierre M.',
    location: 'Caen Centre',
    rating: 5,
    text: 'Nid de frelons énorme dans mon jardin. Hygipro est intervenu avec tout l\'équipement de sécurité. Parfait !',
    service: 'Destruction nid',
    date: 'Il y a 1 mois'
  },
  {
    name: 'Sophie B.',
    location: 'Paris 11e',
    rating: 5,
    text: 'Problème de cafards dans mon restaurant résolu en une intervention ! Technicien très discret.',
    service: 'Désinsectisation',
    date: 'Il y a 3 semaines'
  },
  {
    name: 'Pierre L.',
    location: 'Région parisienne',
    rating: 5,
    text: 'Punaises de lit dans ma chambre d\'hôtel. Intervention nocturne efficace. Aucune récidive depuis 6 mois !',
    service: 'Punaises de lit',
    date: 'Il y a 1 semaine'
  }
];

const Testimonials = () => {
  return (
    <section id="avis" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Avis <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-gray-700">
            La satisfaction de nos clients témoigne de notre expertise
          </p>
        </div>

        {/* Note Google en évidence */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mr-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="flex space-x-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-700 font-medium">Note Google</div>
            </div>
            
            <div className="border-l border-gray-200 pl-6">
              <div className="text-2xl font-bold text-gray-900 mb-1">247+</div>
              <div className="text-sm text-gray-700 font-medium mb-2">Avis clients</div>
              <div className="text-green-600 text-sm font-medium">98% recommandent</div>
            </div>
          </div>
        </div>

        {/* Avis compacts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.date}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-600">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </div>
                  <div className="text-xs font-medium text-green-600">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;