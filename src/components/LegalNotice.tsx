import React from 'react';
import { X, Building, Gavel, Phone, Mail, MapPin } from 'lucide-react';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Gavel className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Mentions Légales</h2>
              <p className="text-gray-600 text-sm">Hygipro Nuisibles</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Building className="w-5 h-5 text-blue-600 mr-2" />
              1. Informations sur l'entreprise
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div>
                <strong className="text-gray-900">Raison sociale :</strong>
                <span className="text-gray-700 ml-2">Hygipro Nuisibles</span>
              </div>
              <div>
                <strong className="text-gray-900">Forme juridique :</strong>
                <span className="text-gray-700 ml-2">Entreprise individuelle</span>
              </div>
              <div>
                <strong className="text-gray-900">SIRET :</strong>
                <span className="text-gray-700 ml-2">XXX XXX XXX XXXXX</span>
              </div>
              <div>
                <strong className="text-gray-900">Code APE :</strong>
                <span className="text-gray-700 ml-2">8129A - Désinfection, désinsectisation, dératisation</span>
              </div>
              <div>
                <strong className="text-gray-900">TVA Intracommunautaire :</strong>
                <span className="text-gray-700 ml-2">FR XX XXX XXX XXX</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              2. Coordonnées
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-600" />
                <span><strong>Téléphone :</strong></span>
                <a href="tel:0174747847" className="text-red-600 hover:text-red-700">01 74 74 78 47</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600" />
                <span><strong>Email :</strong></span>
                <a href="mailto:hygopro@nuisible.fr" className="text-red-600 hover:text-red-700">hygopro@nuisible.fr</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-red-600" />
                <span><strong>Zones d'intervention :</strong> Paris & Caen</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Directeur de publication</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Responsable :</strong> [Nom du dirigeant]<br />
                <strong>Qualité :</strong> Gérant
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Hébergement</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                <strong>Hébergeur :</strong> [Nom de l'hébergeur]<br />
                <strong>Adresse :</strong> [Adresse de l'hébergeur]<br />
                <strong>Téléphone :</strong> [Téléphone de l'hébergeur]
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Certifications professionnelles</h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="/certibiocide-1 copy.png" 
                  alt="Certification Certibiocide" 
                  className="h-12 w-auto"
                />
                <div>
                  <p className="font-semibold text-green-800">Certification Certibiocide</p>
                  <p className="text-green-700 text-sm">Agréé par l'État pour l'utilisation de produits biocides</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                <li>Utilisation professionnelle de produits certifiés</li>
                <li>Respect des normes environnementales</li>
                <li>Formation continue obligatoire</li>
                <li>Traçabilité des interventions</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Propriété intellectuelle</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur 
                et appartient à Hygipro Nuisibles ou à ses partenaires.
              </p>
              <p>
                Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">7. Responsabilité</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                Hygipro Nuisibles s'efforce de fournir des informations exactes et à jour. 
                Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations.
              </p>
              <p>
                L'utilisation des informations de ce site se fait sous votre entière responsabilité.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">8. Droit applicable</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>Droit applicable :</strong> Droit français<br />
                <strong>Juridiction compétente :</strong> Tribunaux de Paris<br />
                <strong>Médiation :</strong> En cas de litige, une médiation peut être engagée avant toute action judiciaire.
              </p>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Informations importantes</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
              <li>Devis gratuit et sans engagement</li>
              <li>Intervention 7j/7 24h/24 pour les urgences</li>
              <li>Produits certifiés et respectueux de l'environnement</li>
              <li>Garantie satisfaction sur toutes nos interventions</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;