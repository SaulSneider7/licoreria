
import React from 'react';
import { ChevronRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Luxury Bar" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <Star className="text-amber-500 fill-amber-500" size={16} />
          <span className="text-amber-500 uppercase tracking-[0.4em] font-bold text-xs md:text-sm">
            La Cava Más Exclusiva de la Región
          </span>
          <Star className="text-amber-500 fill-amber-500" size={16} />
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-8 leading-[0.9] opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          Whisky, Ron <br/> <span className="text-amber-500">&</span> Más
        </h1>
        
        <p className="text-gray-300 text-lg md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          Descubre el placer de los mejores destilados del mundo, seleccionados por expertos para los paladares más exigentes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <a 
            href="#catalogo" 
            className="group w-full sm:w-auto px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/40 flex items-center justify-center gap-2"
          >
            Explorar Reserva <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#promociones" 
            className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all"
          >
            Ofertas del Mes
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
      `}</style>
      
      {/* Decorative lines */}
      <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
    </section>
  );
};

export default Hero;
