
import React from 'react';
import type { Product } from '../types';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola! Me interesa el producto: ${product.name}. ¿Tienen stock?`)}`;

  return (
    <div className="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-amber-500/40 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] flex flex-col">
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/5 blur-[60px] rounded-full group-hover:bg-amber-500/10 transition-all"></div>
      
      <div className="relative h-96 overflow-hidden p-6 pb-0">
        <div className="w-full h-full rounded-[2rem] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-x-6 bottom-0 h-32 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        <div className="absolute top-10 right-10">
          <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/20">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold text-white group-hover:text-amber-500 transition-colors leading-tight">
            {product.name}
          </h3>
          <ArrowUpRight className="text-slate-700 group-hover:text-amber-500 transition-all translate-y-1" size={20} />
        </div>
        
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Precio Especial</span>
            <span className="text-3xl font-bold text-white">
              <span className="text-amber-500 text-sm align-top mr-1">$</span>{product.price}
            </span>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white p-5 rounded-2xl transition-all duration-500 active:scale-90"
            title="Comprar por WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
