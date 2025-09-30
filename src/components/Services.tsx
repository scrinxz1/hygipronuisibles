import React from 'react';
import { Bug, Zap, Target, Bed, Home } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Dératisation',
    subtitle: 'Rats & Souris',
    description: 'Élimination complète et durable des rongeurs',
    features: ['Rats bruns et noirs', 'Souris domestiques', 'Traitement préventif'],
    image: '/ChatGPT Image 25 sept. 2025, 13_57_31.png'
  },
  {
    icon: Bug,
    title: 'Cafards & Blattes',
    subtitle: 'Désinsectisation',
    description: 'Traitement professionnel contre tous types de blattes',
    features: ['Blattes germaniques', 'Blattes orientales', 'Gel et pulvérisation'],
    image: '/ChatGPT Image 25 sept. 2025, 15_41_25.png'
  },
  {
    icon: Zap,
    title: 'Guêpes & Frelons',
    subtitle: 'Destruction de nids',
    description: 'Intervention sécurisée pour tous types de nids',
    features: ['Nids de guêpes', 'Frelons européens', 'Frelons asiatiques'],
    image: '/ChatGPT Image 25 sept. 2025, 15_47_50.png'
  },
  {
    icon: Bed,
    title: 'Punaises de Lit',
    subtitle: 'Traitement spécialisé',
    description: 'Élimination complète des punaises de lit',
    features: ['Détection précise', 'Traitement thermique', 'Suivi post-traitement'],
    image: '/ChatGPT Image 25 sept. 2025, 16_23_02.png'
  },
  {
    icon: Home,
    title: 'Nettoyage Hydrogène',
    subtitle: 'Désinfection totale',
    description: 'Nettoyage et désinfection à l\'hydrogène peroxydé',
    features: ['Désinfection complète', 'Élimination virus/bactéries', 'Traitement écologique'],
    image: '/ChatGPT Image 25 sept. 2025, 14_14_12.png'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-white">Nos </span>
            <span className="text-green-400">Services</span>
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto">
            Expertise professionnelle dans l'élimination de tous types de nuisibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cover bg-center bg-no-repeat relative overflow-hidden rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-base font-semibold text-green-400 mb-3">{service.subtitle}</div>
                <p className="text-gray-200 text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div>
                      <span className="text-white font-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-green-600 rounded-full px-6 py-3 shadow-lg">
            <span className="text-white font-semibold">Intervention 7j/7 24h/24 • Devis gratuit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;