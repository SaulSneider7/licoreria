export const CATEGORIES = {
  WHISKY: 'Whisky',
  RON: 'Ron',
  CERVEZA: 'Cerveza',
  VODKA: 'Vodka',
  VINO: 'Vino',
  TEQUILA: 'Tequila',
  GIN: 'Gin',
} as const;

export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  image: string;
  featured: boolean;
}
