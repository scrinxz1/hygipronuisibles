import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin, Bug } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    problemType: '',
    urgency: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Création du contenu de l'email
    const subject = `🚨 NOUVELLE DEMANDE DE DEVIS - ${formData.problemType} - ${formData.urgency}`;
    const body = `
NOUVELLE DEMANDE DE DEVIS HYGIPRO NUISIBLES
=============================================

👤 INFORMATIONS CLIENT :
• Nom : ${formData.name}
• Téléphone : ${formData.phone}
• Email : ${formData.email || 'Non renseigné'}
• Adresse : ${formData.address}

🐭 PROBLÈME :
• Type : ${formData.problemType}
• Urgence : ${formData.urgency}
• Description : ${formData.description || 'Aucune description'}

📅 REÇU LE : ${new Date().toLocaleString('fr-FR')}

⚡ ACTION REQUISE : Contacter le client sous 2h !
    `.trim();

    // Ouverture du client email avec les données pré-remplies
    const mailtoLink = `mailto:hygopro@nuisible.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    // Message de confirmation
    alert('✅ Votre demande de devis a été préparée !\n\n📧 Votre client email va s\'ouvrir pour envoyer la demande.\n\n⏰ Nous vous recontactons sous 2h !');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Bug className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Devis Gratuit</h2>
              <p className="text-gray-400 text-sm">Réponse sous 2h • Sans engagement</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
              placeholder="votre@email.fr"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Adresse d'intervention *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
              placeholder="Adresse complète"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Type de problème *
              </label>
              <select
                name="problemType"
                value={formData.problemType}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
              >
                <option value="">Sélectionnez</option>
                <option value="rats-souris">Rats / Souris</option>
                <option value="cafards-blattes">Cafards / Blattes</option>
                <option value="guêpes-frelons">Guêpes / Frelons</option>
                <option value="punaises-lit">Punaises de lit</option>
                <option value="fourmis">Fourmis</option>
                <option value="autres">Autres nuisibles</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Urgence *
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
              >
                <option value="">Sélectionnez</option>
                <option value="immediate">Immédiate (24h)</option>
                <option value="urgent">Urgent (48h)</option>
                <option value="normal">Normal (cette semaine)</option>
                <option value="planifie">Planifié</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Description du problème
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors resize-none"
              placeholder="Décrivez votre problème (localisation, ampleur, depuis quand...)"
            />
          </div>

          {/* Contact direct */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-3">Ou contactez-nous directement</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="tel:0174747847"
                className="flex items-center space-x-3 p-3 bg-red-600 hover:bg-red-700 rounded-xl text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-bold">01 74 74 78 47</div>
                  <div className="text-sm opacity-90">Appel immédiat</div>
                </div>
              </a>
              <a
                href="mailto:hygopro@nuisible.fr"
                className="flex items-center space-x-3 p-3 bg-gray-700 hover:bg-gray-600 rounded-xl text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <div>
                  <div className="font-bold">Email</div>
                  <div className="text-sm opacity-90">Réponse sous 2h</div>
                </div>
              </a>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Envoyer ma demande</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-colors"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;