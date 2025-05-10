import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import CategorySection from '../components/CategorySection';
import { getFeaturedProducts } from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      <Hero />

      <FeaturedProducts products={featuredProducts} />

      <CategorySection />

      <div className="bg-blue-600 py-10 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Offre spéciale</h2>
          <p className="text-xl text-white/90 mb-6">
            Profitez de 20% de réduction sur votre premier achat. Utilisez le code : mpgbh78
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
            Acheter maintenant
          </button>
        </div>
      </div>

      <section className="bg-gray-100 py-12 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Restez informé</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir des mises à jour sur les nouveaux produits, les offres spéciales et bien plus encore.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md font-medium hover:bg-blue-700 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default HomePage;
