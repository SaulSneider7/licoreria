
import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface AgeVerificationProps {
  onVerify: () => void;
}

const AgeVerification: React.FC<AgeVerificationProps> = ({ onVerify }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full"></div>

      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl relative">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30">
            <ShieldAlert className="text-amber-500 w-10 h-10" />
          </div>
        </div>
        
        <h2 className="text-amber-500 uppercase tracking-widest font-bold mb-4 text-sm">Control de Acceso</h2>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">¿Eres mayor de edad?</h1>
        <p className="text-gray-400 mb-10 text-lg">
          Debes ser mayor de 18 años (o la edad legal en tu país) para disfrutar de nuestra colección exclusiva.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={onVerify}
            className="bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
          >
            SÍ, SOY MAYOR
          </button>
          <button 
            onClick={() => window.location.href = 'https://www.google.com'}
            className="bg-slate-800 hover:bg-slate-700 text-gray-300 py-4 rounded-xl font-bold text-lg transition-all"
          >
            SOY MENOR
          </button>
        </div>
        
        <p className="mt-8 text-xs text-slate-500 uppercase tracking-tighter">
          Beber con moderación. Prohibida su venta a menores de 18 años.
        </p>
      </div>
    </div>
  );
};

export default AgeVerification;
