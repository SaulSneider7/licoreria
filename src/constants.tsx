
import type { Product } from './types';
import { CATEGORIES } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Johnnie Walker Blue Label',
    category: CATEGORIES.WHISKY,
    description: 'El pico máximo de los whiskies de la casa Walker. Una obra maestra inigualable.',
    price: 250,
    image: './johnnie_walker_blue_label.webp',
    featured: true
  },
  {
    id: '2',
    name: 'Ron Zacapa Centenario 23',
    category: CATEGORIES.RON,
    description: 'Añejado en las tierras altas de Guatemala, un ron con complejidad y dulzura excepcional.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '3',
    name: 'Grey Goose VX',
    category: CATEGORIES.VODKA,
    description: 'Vodka francés premium con un toque de cognac, suavidad y carácter sin igual.',
    price: 110,
    image: './Grey_Goose_VX.png',
    featured: true
  },
  {
    id: '4',
    name: 'Pack Corona Extra (24)',
    category: CATEGORIES.CERVEZA,
    description: 'La cerveza mexicana más famosa del mundo. Frescura con un toque de limón.',
    price: 35,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=800',
    featured: false
  },
  {
    id: '5',
    name: 'Macallan 12 Double Cask',
    category: CATEGORIES.WHISKY,
    description: 'Equilibrio perfecto de barricas de roble americano y europeo sazonadas con jerez.',
    price: 95,
    image: './macalla_12_double_cask.png',
    featured: true
  },
  {
    id: '6',
    name: 'Diplomático Reserva Exclusiva',
    category: CATEGORIES.RON,
    description: 'Ron venezolano de prestigio mundial, rico en notas de miel, caramelo y cáscara de naranja.',
    price: 55,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    featured: true
  }
];

export const BRANDS = [
  'Johnnie Walker', 'Zacapa', 'Buchanan\'s', 'Grey Goose', 'Corona', 'Heineken', 'Smirnoff', 'Don Julio'
];

export const WHATSAPP_NUMBER = '51917123918';
