
import risottoTrufa from "@/assets/risotto-trufa.jpg";
import salmonGlaseado from "@/assets/salmon-glaseado.jpg";
import croquetasJamon from "@/assets/croquetas-jamon.jpg";
import carpaccioTernera from "@/assets/carpaccio-ternera.jpg";
import pulpoGallega from "@/assets/pulpo-gallega.jpg";
import chuletonBuey from "@/assets/chuleton-buey.jpg";
import paellaMariscos from "@/assets/paella-mariscos.jpg";
import lasanaCarne from "@/assets/lasana-carne.jpg";
import tartaQueso from "@/assets/tarta-queso.jpg";
import volcanChocolate from "@/assets/volcan-chocolate.jpg";
import cremaCatalana from "@/assets/crema-catalana.jpg";
import copaTinto from "@/assets/copa-tinto.webp";
import limonadaArtesanal from "@/assets/limonada-artesanal.webp";
import cafeEspresso from "@/assets/cafe-espresso.webp";
import type { CategoryInfo, Dish } from "@/types/menu";

export const categories: CategoryInfo[] = [
  { id: "sugerencias", label: "Sugerencias del Día" },
  { id: "entradas", label: "Entradas" },
  { id: "platos-fuertes", label: "Platos Fuertes" },
  { id: "postres", label: "Postres" },
  { id: "bebidas", label: "Bebidas" },
];

export const dishes: Dish[] = [
  // Sugerencias del Día
  {
    id: "sug-1",
    name: "Risotto de Trufa Negra",
    category: "sugerencias",
    price: 28.50,
    description: "Cremoso risotto con trufa negra fresca, parmesano y aceite de trufa.",
    fullDescription: "Un risotto elaborado con arroz carnaroli italiano, cocido lentamente con caldo de vegetales casero. Finalizado con generosas láminas de trufa negra fresca, parmesano reggiano envejecido y un toque de aceite de trufa. Una experiencia gastronómica inolvidable.",
    image: risottoTrufa,
    isSuggestion: true,
    isActive: true,
    tagline: "El favorito de la casa"
  },
  {
    id: "sug-2",
    name: "Salmón a la Parrilla con Glaseado de Miel",
    category: "sugerencias",
    price: 32.00,
    description: "Filete de salmón fresco con glaseado de miel y mostaza, acompañado de espárragos.",
    fullDescription: "Salmón noruego premium sellado a la parrilla, cubierto con un delicado glaseado de miel artesanal, mostaza dijon y hierbas frescas. Servido sobre una cama de espárragos verdes salteados con mantequilla de ajo y papas baby confitadas.",
    image: salmonGlaseado,
    isSuggestion: true,
    isActive: true,
    tagline: "¡Exquisito sabor!"
  },
  
  // Entradas
  {
    id: "ent-1",
    name: "Croquetas de Jamón Ibérico",
    category: "entradas",
    price: 12.50,
    description: "6 unidades de croquetas cremosas de jamón ibérico de bellota.",
    fullDescription: "Croquetas artesanales elaboradas con bechamel casera y jamón ibérico de bellota de Jabugo. Rebozadas en pan rallado fino y fritas a temperatura perfecta para lograr un exterior crujiente y un interior cremoso y fundente.",
    image: croquetasJamon,
    isSuggestion: false,
    isActive: true,
    tagline: "Perfecto para compartir"
  },
  {
    id: "ent-2",
    name: "Carpaccio de Ternera",
    category: "entradas",
    price: 14.00,
    description: "Finas láminas de ternera con rúcula, parmesano y vinagreta de mostaza.",
    fullDescription: "Láminas finísimas de solomillo de ternera madurada, acompañadas de rúcula fresca, virutas de parmesano reggiano, tomates cherry confitados y nuestra vinagreta especial de mostaza dijon y aceite de oliva virgen extra.",
    image: carpaccioTernera,
    isSuggestion: false,
    isActive: true
  },
  {
    id: "ent-3",
    name: "Pulpo a la Gallega",
    category: "entradas",
    price: 18.00,
    description: "Pulpo cocido con papas, aceite de oliva y pimentón de la Vera.",
    fullDescription: "Pulpo gallego cocido tradicionalmente en su punto perfecto de ternura, servido sobre papas cocidas, todo ello aliñado con aceite de oliva virgen extra y pimentón dulce y picante de la Vera. Un clásico que nunca falla.",
    image: pulpoGallega,
    isSuggestion: false,
    isActive: true,
    tagline: "Tradición mediterránea"
  },
  
  // Platos Fuertes
  {
    id: "pf-1",
    name: "Chuletón de Buey Premium",
    category: "platos-fuertes",
    price: 45.00,
    description: "Chuletón de buey madurado (400g) a la parrilla, acompañado de papas y verduras.",
    fullDescription: "Impresionante chuletón de buey madurado durante 45 días, de 400 gramos, asado a la parrilla a temperatura alta para sellar los jugos. Servido con papas panadera gratinadas, verduras de temporada salteadas y nuestra salsa de pimienta verde casera.",
    image: chuletonBuey,
    isSuggestion: false,
    isActive: true,
    tagline: "Para los amantes de la carne"
  },
  {
    id: "pf-2",
    name: "Paella de Mariscos",
    category: "platos-fuertes",
    price: 38.00,
    description: "Paella valenciana con langostinos, mejillones, calamares y almejas.",
    fullDescription: "Auténtica paella valenciana preparada con arroz bomba, azafrán genuino y un generoso surtido de mariscos frescos: langostinos, mejillones, calamares, almejas y gambas. Cocinada al momento en paellera tradicional. Mínimo 2 personas.",
    image: paellaMariscos,
    isSuggestion: false,
    isActive: true,
    tagline: "Perfecto para compartir"
  },
  {
    id: "pf-3",
    name: "Lasaña de Carne al Horno",
    category: "platos-fuertes",
    price: 16.50,
    description: "Lasaña casera con carne bolognesa, bechamel y queso gratinado.",
    fullDescription: "Lasaña elaborada con pasta fresca italiana, rellena de nuestra boloñesa artesanal de ternera y cerdo cocinada a fuego lento durante horas, capas de bechamel cremosa y abundante queso mozzarella y parmesano gratinado al horno.",
    image: lasanaCarne,
    isSuggestion: false,
    isActive: true,
    tagline: "Reconfortante y delicioso"
  },
  
  // Postres
  {
    id: "pos-1",
    name: "Tarta de Queso con Frutos Rojos",
    category: "postres",
    price: 7.50,
    description: "Cremosa tarta de queso estilo Nueva York con coulis de frutos rojos.",
    fullDescription: "Nuestra famosa tarta de queso elaborada con queso crema Philadelphia, horneada lentamente para lograr una textura ultra cremosa. Servida con coulis casero de frutos rojos (frambuesas, fresas y arándanos) y menta fresca.",
    image: tartaQueso,
    isSuggestion: false,
    isActive: true,
    tagline: "El broche perfecto"
  },
  {
    id: "pos-2",
    name: "Volcán de Chocolate",
    category: "postres",
    price: 8.00,
    description: "Bizcocho de chocolate con centro fundido, servido con helado de vainilla.",
    fullDescription: "Nuestro postre estrella: un bizcocho de chocolate negro 70% cacao con un corazón fundido de chocolate que fluye al partir. Servido caliente con helado artesanal de vainilla de Madagascar y frutos secos caramelizados.",
    image: volcanChocolate,
    isSuggestion: true,
    isActive: true,
    tagline: "¡Irresistible!"
  },
  {
    id: "pos-3",
    name: "Crema Catalana",
    category: "postres",
    price: 6.50,
    description: "Postre tradicional catalán con capa crujiente de azúcar caramelizado.",
    fullDescription: "La auténtica crema catalana elaborada según receta tradicional: crema pastelera aromatizada con canela y limón, coronada con una capa fina de azúcar caramelizado con soplete en el momento del servicio para lograr ese crujiente característico.",
    image: cremaCatalana,
    isSuggestion: false,
    isActive: true
  },
  
  // Bebidas
  {
    id: "beb-1",
    name: "Vino Tinto Reserva",
    category: "bebidas",
    price: 22.00,
    description: "Copa de vino tinto reserva D.O. Rioja, con cuerpo y gran carácter.",
    fullDescription: "Selección de vinos tintos reserva de la Denominación de Origen Rioja. Vinos con crianza en barrica de roble que aportan notas especiadas, frutos maduros y un final persistente. Maridaje perfecto para carnes rojas y quesos.",
    image: copaTinto,
    isSuggestion: false,
    isActive: true
  },
  {
    id: "beb-2",
    name: "Limonada Artesanal",
    category: "bebidas",
    price: 4.50,
    description: "Limonada natural con hierbabuena fresca y un toque de jengibre.",
    fullDescription: "Refrescante limonada preparada al momento con limones recién exprimidos, hierbabuena fresca del huerto, un toque de jengibre rallado, sirope artesanal y hielo picado. Una explosión de sabor y frescura.",
    image: limonadaArtesanal,
    isSuggestion: false,
    isActive: true,
    tagline: "Refrescante y natural"
  },
  {
    id: "beb-3",
    name: "Café Espresso",
    category: "bebidas",
    price: 2.50,
    description: "Café espresso italiano de granos 100% arábica, tostado artesanal.",
    fullDescription: "Espresso italiano elaborado con granos 100% arábica de origen único, tostados artesanalmente para resaltar notas de cacao, frutos secos y un final ligeramente dulce. Extraído con máquina profesional para garantizar la crema perfecta.",
    image: cafeEspresso,
    isSuggestion: false,
    isActive: true
  },
];
