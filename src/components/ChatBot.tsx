import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Phone, Mail, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: string[];
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      timeoutRef.current = setTimeout(() => {
        addBotMessage(
          "👋 Bonjour ! Je suis l'assistant virtuel d'Hygipro Nuisibles. Comment puis-je vous aider aujourd'hui ?",
          [
            "🐭 Problème de rats/souris",
            "🪳 Cafards/blattes", 
            "🐝 Nid de guêpes/frelons",
            "🛏️ Punaises de lit",
            "🧽 Nettoyage hydrogène",
            "💬 Parler à un agent",
            "📞 Appel d'urgence"
          ]
        );
      }, 500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, messages.length]);

  const addMessage = (text: string, sender: 'user' | 'bot', options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true);
    timeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot', options);
    }, 1000);
  };

  const handleBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();

    if (message.includes('rat') || message.includes('souris') || message.includes('🐭')) {
      addBotMessage(
        "🐭 Je comprends, vous avez un problème de rongeurs. C'est effectivement urgent ! Quelques questions rapides :",
        [
          "Dans quelle pièce ?",
          "Depuis quand ?",
          "Combien environ ?",
          "Intervention immédiate",
          "Conseils prévention"
        ]
      );
    } else if (message.includes('cafard') || message.includes('blatte') || message.includes('🪳')) {
      addBotMessage(
        "🪳 Problème de cafards détecté. Ces nuisibles se reproduisent très vite ! Où les avez-vous vus ?",
        [
          "Cuisine",
          "Salle de bain", 
          "Partout dans le logement",
          "Traitement urgent",
          "Conseils prévention"
        ]
      );
    } else if (message.includes('guêpe') || message.includes('frelon') || message.includes('nid') || message.includes('🐝')) {
      addBotMessage(
        "🐝 Attention ! Les nids de guêpes/frelons sont dangereux. N'essayez JAMAIS de les détruire vous-même !",
        [
          "Nid visible où ?",
          "Taille du nid ?",
          "Intervention d'urgence",
          "📞 01 74 74 78 47",
          "Conseils sécurité"
        ]
      );
    } else if (message.includes('punaise') || message.includes('lit') || message.includes('🛏️')) {
      addBotMessage(
        "🛏️ Les punaises de lit sont très résistantes. Un traitement professionnel est indispensable.",
        [
          "Piqûres visibles ?",
          "Taches sur draps ?",
          "Traitement complet",
          "Devis gratuit",
          "Conseils urgents"
        ]
      );
    } else if (message.includes('nettoyage') || message.includes('hydrogène') || message.includes('désinfection') || message.includes('🧽')) {
      addBotMessage(
        "🧽 Nettoyage et désinfection à l'hydrogène peroxydé. Traitement écologique et très efficace !",
        [
          "Quelle surface ?",
          "Type de contamination ?",
          "Désinfection complète",
          "Devis personnalisé",
          "Protocole sanitaire"
        ]
      );
    } else if (message.includes('urgence') || message.includes('immédiat') || message.includes('maintenant')) {
      addBotMessage(
        "🚨 Pour une intervention d'urgence immédiate, contactez directement notre équipe :",
        [
          "📞 Appeler 01 74 74 78 47",
          "📧 hygopro@nuisible.fr",
          "Retour menu principal"
        ]
      );
    } else {
      addBotMessage(
        "🤔 Je ne suis pas sûr de bien comprendre. Voici nos services principaux :",
        [
          "🐭 Rats / Souris",
          "🪳 Cafards / Blattes", 
          "🐝 Guêpes / Frelons",
          "🛏️ Punaises de lit",
          "🧽 Nettoyage hydrogène",
          "📞 Contact direct"
        ]
      );
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const userMessage = inputValue;
    setInputValue('');

    timeoutRef.current = setTimeout(() => {
      handleBotResponse(userMessage);
    }, 500);
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');
    
    timeoutRef.current = setTimeout(() => {
      if (option.includes('📞') || option.includes('Appeler')) {
        window.location.href = 'tel:0174747847';
      } else if (option.includes('📧') || option.includes('hygopro@nuisible.fr')) {
        window.location.href = 'mailto:hygopro@nuisible.fr';
      } else {
        handleBotResponse(option);
      }
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-72 sm:w-80 h-[450px] sm:h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
      <div className="p-3 sm:p-4 rounded-t-2xl flex items-center justify-between bg-gradient-to-r from-red-600 to-orange-600">
        <div className="flex items-center space-x-3">
          <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center bg-red-500">
            <Bot className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-sm sm:text-base">Assistant Hygipro</div>
            <div className="text-white/80 text-xs sm:text-sm flex items-center">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2"></div>
              Bot intelligent
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors border border-white/30"
        >
          <X className="w-4 sm:w-5 h-4 sm:h-5 text-white font-bold" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] sm:max-w-[80%] ${
              message.sender === 'user' 
                ? 'bg-red-600 text-white rounded-l-2xl rounded-tr-2xl' 
                : 'bg-gray-100 text-gray-800 rounded-r-2xl rounded-tl-2xl'
            } p-2 sm:p-3`}>
              <p className="text-xs sm:text-sm leading-relaxed">{message.text}</p>
              {message.options && (
                <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                  {message.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="block w-full text-left p-1.5 sm:p-2 rounded-lg text-xs transition-colors bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="p-2 sm:p-3 rounded-r-2xl rounded-tl-2xl bg-gray-100">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 sm:p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Décrivez votre problème..."
            className="flex-1 border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 rounded-lg transition-colors bg-red-600 hover:bg-red-700 text-white"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-2 sm:mt-3">
          <a
            href="tel:0174747847"
            className="flex items-center space-x-1 text-xs text-red-600 hover:text-red-700"
          >
            <Phone className="w-3 h-3 flex-shrink-0" />
            <span>Appel</span>
          </a>
          <a
            href="mailto:hygopro@nuisible.fr"
            className="flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-700"
          >
            <Mail className="w-3 h-3 flex-shrink-0" />
            <span>Email</span>
          </a>
          <div className="flex items-center space-x-1 text-xs text-green-600">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span>24h/24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;