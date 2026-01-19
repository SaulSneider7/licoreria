
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AgeVerification from './components/AgeVerification';
import WhatsAppFloating from './components/WhatsAppFloating';
import { PRODUCTS, BRANDS, WHATSAPP_NUMBER } from './constants';
import { Wine, Instagram, Facebook, Twitter, Mail, ShieldCheck, Truck, Award, Percent, Phone, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [filter, setFilter] = useState<string>('Todos');

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (verified) setIsVerified(true);
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age_verified', 'true');
    setIsVerified(true);
  };

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = filter === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  if (!isVerified) {
    return <AgeVerification onVerify={handleVerify} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />

      {/* Brand Ticker */}
      <section className="py-12 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-slate-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-8">Nuestras Marcas Aliadas</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
            {BRANDS.map(brand => (
              <span key={brand} className="text-xl md:text-3xl font-serif font-bold text-white whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Trust Section */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
              <ShieldCheck size={32} className="text-amber-500 group-hover:text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Productos Originales</h4>
            <p className="text-slate-500 text-sm">Garantizamos la autenticidad de cada botella en nuestra colección.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
              <Truck size={32} className="text-amber-500 group-hover:text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Envío Express</h4>
            <p className="text-slate-500 text-sm">Recibe tus bebidas en la puerta de tu casa en tiempo récord.</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
              <Award size={32} className="text-amber-500 group-hover:text-white" />
            </div>
            <h4 className="text-xl font-bold mb-3">Servicio VIP</h4>
            <p className="text-slate-500 text-sm">Atención personalizada vía WhatsApp para todos tus eventos.</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="catalogo" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-amber-500 uppercase tracking-widest font-bold mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-8 h-px bg-amber-500"></span> Nuestra Cava Elite
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Selección de <br/> Clase Mundial</h3>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 bg-slate-900/50 p-2 rounded-[2rem] border border-slate-800">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full transition-all text-sm font-bold uppercase tracking-widest ${
                  filter === cat 
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/20 scale-105' 
                    : 'text-gray-500 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Banner de Promoción */}
        <div id="promociones" className="mt-32 p-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-700 rounded-[3rem] shadow-2xl overflow-hidden group">
          <div className="bg-slate-950 rounded-[2.9rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full group-hover:bg-amber-500/20 transition-all duration-1000"></div>
            
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-1.5 rounded-full mb-6 text-sm font-bold border border-amber-500/20">
                <Percent size={16} /> PROMOCIÓN EXCLUSIVA
              </div>
              <h4 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">¿Preparando un <span className="text-amber-500 italic">Evento?</span></h4>
              <p className="text-gray-400 mb-10 max-w-xl text-lg md:text-xl leading-relaxed">
                Ofrecemos descuentos especiales para bodas, cumpleaños y eventos corporativos. Armamos combos a tu medida con envío incluido.
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola! Me gustaría cotizar bebidas para un evento.`}
                target="_blank"
                className="inline-flex bg-amber-600 hover:bg-amber-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all active:scale-95"
              >
                Solicitar Cotización Gratis
              </a>
            </div>

            <div className="relative lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Evento" 
                  className="rounded-3xl shadow-2xl border border-white/10 relative z-10 w-full max-w-xs rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-32 pb-12 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-1.5 bg-amber-500 rounded-lg">
                <Wine className="text-slate-950 h-6 w-6" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tighter text-white uppercase">
                ELITE<span className="text-amber-500">BOTTLE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Dedicados a la curaduría de los destilados más finos del mundo. Elevamos el arte de brindar a una experiencia inolvidable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-all border border-slate-800">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-all border border-slate-800">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-all border border-slate-800">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Categorías</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Whiskies Premium</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Rones Añejos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Vodkas de Lujo</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cervezas Importadas</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Vinos de Guarda</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Servicios</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Venta Corporativa</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Combos para Eventos</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Catas Privadas</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Regalos Personalizados</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contacto</h5>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Mail size={16} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-bold">Email</p>
                  <p className="text-slate-500 text-sm">ventas@elitebottle.co</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-900 rounded-lg">
                  <Phone size={16} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-slate-300 text-sm font-bold">WhatsApp</p>
                  <p className="text-slate-500 text-sm">+54 9 11 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] text-slate-700 font-bold tracking-[0.3em] uppercase space-y-2 text-center md:text-left">
            <p>© 2024 ELITE BOTTLE — DESTILADOS DE ALTA GAMA.</p>
            <div className="flex justify-center md:justify-start gap-8">
              <span className="text-amber-500/50">Beber con moderación</span>
              <span>Venta exclusiva a mayores de 18 años</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="https://tu-sitioweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-2 bg-slate-900 rounded-full border border-slate-800 hover:border-amber-500/50 transition-all shadow-xl"
            >
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Creado por</span>
              <span className="text-sm font-serif font-bold text-amber-500 group-hover:text-amber-400 transition-colors flex items-center gap-1">
                tu-sitioweb.com <ExternalLink size={12} className="opacity-50" />
              </span>
            </a>
          </div>
        </div>
      </footer>

      <WhatsAppFloating />
    </div>
  );
};

export default App;
