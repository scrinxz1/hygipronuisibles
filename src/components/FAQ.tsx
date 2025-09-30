import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Combien coûte une intervention de dératisation ?',
    answer: 'Le tarif varie selon la superficie, le type de nuisibles et l\'ampleur de l\'infestation. Nous proposons un devis gratuit et personnalisé pour chaque situation. Contactez-nous au 01 74 74 78 47 pour une estimation précise.'
  },
  {
    question: 'Intervenez-vous vraiment 7j/7 24h/24 ?',
    answer: 'Oui, notre équipe est disponible tous les jours de la semaine, y compris les week-ends et jours fériés. Pour les urgences (nid de frelons, invasion massive), nous intervenons même la nuit.'
  },
  {
    question: 'Vos produits sont-ils dangereux pour les enfants et animaux ?',
    answer: 'Nous utilisons exclusivement des produits professionnels certifiés et respectueux de l\'environnement. Nos techniciens vous donneront toutes les précautions à prendre selon le traitement appliqué.'
  },
  {
    question: 'Combien de temps faut-il pour éliminer les nuisibles ?',
    answer: 'Cela dépend du type de nuisible et de l\'ampleur de l\'infestation. Pour les rats et souris : 1 à 3 semaines. Pour les insectes : quelques jours à 2 semaines. Nous assurons un suivi jusqu\'à élimination complète.'
  },
  {
    question: 'Offrez-vous une garantie sur vos interventions ?',
    answer: 'Oui, nous offrons une garantie satisfaction sur tous nos traitements. Si les nuisibles reviennent pendant la période de garantie, nous revenons gratuitement pour compléter le traitement.'
  },
  {
    question: 'Dois-je préparer mon logement avant votre intervention ?',
    answer: 'Nos techniciens vous donneront toutes les instructions nécessaires lors de la prise de rendez-vous. Généralement, il faut dégager l\'accès aux zones à traiter et retirer la nourriture accessible.'
  },
  {
    question: 'Comment se déroule un devis gratuit ?',
    answer: 'Contactez-nous par téléphone (01 74 74 78 47) ou par email (hygopro@nuisible.fr). Nous nous déplaçons gratuitement pour évaluer la situation et vous proposer un devis personnalisé sans engagement.'
  },
  {
    question: 'Que faire en cas d\'urgence avec des frelons ?',
    answer: 'Ne tentez jamais de détruire un nid vous-même ! Éloignez-vous de la zone, fermez les fenêtres et appelez-nous immédiatement au 01 74 74 78 47. Nous intervenons en urgence avec l\'équipement adapté.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Questions <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Fréquentes</span>
          </h2>
          <p className="text-lg text-white">
            Toutes les réponses à vos questions sur nos services
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-gray-800 rounded-lg p-4 text-left shadow-sm hover:shadow-md transition-shadow duration-200 flex justify-between items-center border border-gray-700 hover:border-green-600"
                >
                  <span className="text-base font-semibold text-white pr-3">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="bg-gray-700 rounded-lg mx-2 -mt-1 p-4 border-t border-green-600">
                    <p className="text-white leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg max-w-xl mx-auto border border-gray-700">
            <h3 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              Une autre question ?
            </h3>
            <p className="text-white mb-4 text-sm">
              Notre équipe est à votre disposition
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0174747847"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                01 74 74 78 47
              </a>
              <a
                href="mailto:hygopro@nuisible.fr"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors border border-gray-600 text-sm"
              >
                hygopro@nuisible.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;