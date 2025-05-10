import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Écouteurs sans fil",
    price: 79.99,
    description:
      "Écouteurs sans fil de haute qualité avec réduction de bruit et longue autonomie. Parfait pour les amateurs de musique et les trajets quotidiens.",
    image:
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
  },
  {
    id: 2,
    name: "Montre connectée",
    price: 149.99,
    description:
      "Suivez vos objectifs de fitness et restez connecté avec cette élégante montre connectée. Fonctionnalités incluant le suivi de la fréquence cardiaque, le comptage des pas et les notifications smartphone.",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
  },
  {
    id: 3,
    name: "Sac à dos pour ordinateur",
    price: 59.99,
    description:
      "Sac à dos durable et résistant à l'eau avec compartiments rembourrés pour votre ordinateur portable et autres essentiels. Parfait pour les étudiants et les professionnels.",
    image:
      "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "accessories",
    featured: false,
  },
  {
    id: 4,
    name: "Machine à café",
    price: 89.99,
    description:
      "Commencez bien votre journée avec cette cafetière programmable. Fonctionnalités incluant plusieurs options de préparation et une carafe thermique pour garder votre café chaud pendant des heures.",
    image:
      "https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: true,
  },
  {
    id: 5,
    name: "Lampe de bureau",
    price: 39.99,
    description:
      "Lampe de bureau LED moderne avec luminosité réglable et température de couleur. Parfaite pour votre bureau à domicile ou espace d'étude.",
    image:
      "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "home",
    featured: false,
  },
  {
    id: 6,
    name: "Enceinte portable",
    price: 69.99,
    description:
      "Enceinte portable étanche avec une qualité sonore exceptionnelle. Emportez votre musique partout avec cette enceinte compacte et puissante.",
    image:
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "electronics",
    featured: true,
  },
  {
    id: 7,
    name: "Veste d'hiver",
    price: 129.99,
    description:
      "Restez au chaud et élégant avec cette veste d'hiver isolée. Caractéristiques incluant une coque extérieure résistante à l'eau et de nombreuses poches.",
    image:
      "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "clothing",
    featured: false,
  },
  {
    id: 8,
    name: "Tapis de yoga",
    price: 29.99,
    description:
      "Tapis de yoga écologique avec excellente adhérence et rembourrage. Parfait pour le yoga, le pilates et autres exercices au sol.",
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "fitness",
    featured: false,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};


export default products;
