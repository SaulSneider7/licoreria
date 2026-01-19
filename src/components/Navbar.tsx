
import React, { useState, useEffect } from 'react';
import { Wine, Menu, X, Phone, ChevronRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Función para cerrar el menú
  const closeMenu = () => setIsOpen(false);

  // Función para alternar el menú (Abrir/Cerrar)
  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Detectar scroll para cambiar estilo de navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evitar scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled || isOpen ? 'bg-slate-950 border-b border-amber-500/20 shadow-2xl' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 group cursor-pointer relative z-[110]" 
            onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); closeMenu(); }}
          >
            <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-all">
              <Wine className="text-amber-500 h-7 w-7 md:h-8 md:w-8" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white uppercase">
              ELITE<span className="text-amber-500">BOTTLE</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <a href="#" className="text-gray-400 hover:text-amber-500 font-bold uppercase tracking-widest text-xs transition-colors">Inicio</a>
              <a href="#catalogo" className="text-gray-400 hover:text-amber-500 font-bold uppercase tracking-widest text-xs transition-colors">Catalogo</a>
              <a href="#promociones" className="text-gray-400 hover:text-amber-500 font-bold uppercase tracking-widest text-xs transition-colors">Ofertas</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero más información sobre sus productos exclusivos.`}
               target="_blank" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-amber-900/20 active:scale-95">
                <Phone size={14} /> Pedir Ahora
              </a>
            </div>
          </div>

          {/* Mobile Toggle Button - Refined Z-Index */}
          <div className="md:hidden relative z-[110]">
            <button 
              onClick={toggleMenu}
              className={`p-3 rounded-xl transition-all duration-300 transform active:scale-90 ${
                isOpen ? 'bg-amber-500 text-white rotate-90 shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-gray-400'
              }`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 top-0 h-screen w-full bg-slate-950 transition-all duration-500 ease-in-out z-[105] ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        {/* Background Accents for depth */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full -mr-32 opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-amber-500/5 blur-[100px] rounded-full -ml-32 opacity-50"></div>

        <div className="relative flex flex-col h-full px-8 pt-28 pb-12 overflow-y-auto">
          <div className="space-y-2">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-6">Explorar Menú</p>
            
            <a 
              href="#" 
              onClick={closeMenu}
              className="flex items-center justify-between group py-5 border-b border-slate-900"
            >
              <span className="text-4xl font-serif font-bold text-white group-active:text-amber-500 transition-colors">Inicio</span>
              <ChevronRight className="text-slate-800 group-active:text-amber-500" />
            </a>
            
            <a 
              href="#catalogo" 
              onClick={closeMenu}
              className="flex items-center justify-between group py-5 border-b border-slate-900"
            >
              <span className="text-4xl font-serif font-bold text-white group-active:text-amber-500 transition-colors">Catalogo</span>
              <ChevronRight className="text-slate-800 group-active:text-amber-500" />
            </a>
            
            <a 
              href="#promociones" 
              onClick={closeMenu}
              className="flex items-center justify-between group py-5 border-b border-slate-900"
            >
              <span className="text-4xl font-serif font-bold text-white group-active:text-amber-500 transition-colors">Ofertas</span>
              <ChevronRight className="text-slate-800 group-active:text-amber-500" />
            </a>
          </div>

          <div className="mt-12 space-y-6">
            <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em]">Canal de Ventas</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Quiero más información sobre sus productos exclusivos.`}
              target="_blank" 
              className="flex items-center justify-center gap-3 w-full bg-amber-600 text-white py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-900/40 active:scale-95 transition-all"
            >
              <Phone size={24} /> WhatsApp Directo
            </a>
            
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <p className="text-slate-400 text-sm leading-relaxed text-center">
                ¿Buscas algo específico? <br/>
                <span className="text-white font-bold">Consúltanos por botellas de edición limitada.</span>
              </p>
            </div>
          </div>

          <div className="mt-auto pt-10 text-center border-t border-slate-900/50">
            <p className="text-slate-700 text-[10px] font-bold uppercase tracking-[0.3em]">
              Elite Bottle & Co. • Reserva Privada
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
