import React from 'react';
import { Link } from 'react-router-dom';


interface Category {
  id: string;
  name: string;
  image: string;
}


const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Électronique',
    image: 'images/invalid-url.jpeg', 
  },
  {
    id: 'clothing',
    name: 'Vêtements',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
  },
  {
    id: 'home',
    name: 'Maison & Cuisine',
    image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg',
  },
  {
    id: 'accessories',
    name: 'Accessoires',
    image: 'https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg',
  },
];


const CategorySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Acheter par Catégorie
        </h2>

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-lg shadow-md h-64"
            >
              {/* Image de la catégorie */}
              <img
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay avec le nom de la catégorie */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-white/80 mt-1 group-hover:text-white transition-colors">
                    Acheter maintenant
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;