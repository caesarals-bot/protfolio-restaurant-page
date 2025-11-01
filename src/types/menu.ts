export interface Dish {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  isSuggestion: boolean;
  isActive: boolean;
  tagline?: string;
}

export type Category = 
  | "entradas" 
  | "platos-fuertes" 
  | "postres" 
  | "bebidas" 
  | "sugerencias";

export interface CategoryInfo {
  id: Category;
  label: string;
}
