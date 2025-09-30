import React from 'react';
import { X, Shield, Eye, Lock, Mail, Phone } from 'lucide-react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Politique de Confidentialité</h2>
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
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Dernière mise à jour :</strong> 25 septembre 2024
            </p>
          </div>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Eye className="w-5 h-5 text-red-600 mr-2" />
              1. Collecte des données
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>Nous collectons les informations suivantes :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Données personnelles :</strong> nom, prénom, téléphone, email, adresse</li>
                <li><strong>Données techniques :</strong> type de nuisibles, urgence, description du problème</li>
                <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Lock className="w-5 h-5 text-red-600 mr-2" />
              2. Utilisation des données
            </h3>
            <div className="space-y-3 text-gray-700">
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Traiter vos demandes de devis et interventions</li>
                <li>Vous contacter pour planifier les rendez-vous</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Partage des données</h3>
            <div className="space-y-3 text-gray-700">
              <p>Nous ne vendons jamais vos données. Elles peuvent être partagées uniquement avec :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nos techniciens pour les interventions</li>
                <li>Nos partenaires de paiement sécurisé</li>
                <li>Les autorités si requis par la loi</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">4. Vos droits</h3>
            <div className="space-y-3 text-gray-700">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Droit d'accès :</strong> consulter vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données</li>
                <li><strong>Droit d'opposition :</strong> refuser le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h3>
            <div className="space-y-3 text-gray-700">
              <p>Notre site utilise des cookies pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Améliorer votre expérience de navigation</li>
                <li>Analyser le trafic du site</li>
                <li>Mémoriser vos préférences</li>
              </ul>
              <p>Vous pouvez désactiver les cookies dans votre navigateur.</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-gray-900 mb-3">6. Sécurité</h3>
            <div className="space-y-3 text-gray-700">
              <p>Nous mettons en place des mesures techniques et organisationnelles pour protéger vos données :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiffrement SSL/TLS</li>
                <li>Accès restreint aux données</li>
                <li>Sauvegardes sécurisées</li>
                <li>Formation du personnel</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact</h3>
            <div className="space-y-2 text-gray-700">
              <p>Pour exercer vos droits ou toute question :</p>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-600" />
                <a href="mailto:hygopro@nuisible.fr" className="text-red-600 hover:text-red-700">
                  hygopro@nuisible.fr
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-red-600" />
                <a href="tel:0174747847" className="text-red-600 hover:text-red-700">
                  01 74 74 78 47
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;