
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppFloating: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero más información sobre sus productos exclusivos.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
      title="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
      </span>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppFloating;
