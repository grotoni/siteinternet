import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { getCartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">EasyShop</span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {["Accueil", "Produits", "Catégories", "À propos"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-150"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleSearch}
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Search size={20} className="text-gray-600" />
            </button>
            <Link
              to="/cart"
              className="ml-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 relative"
            >
              <ShoppingCart size={20} className="text-gray-600" />
              {getCartItemCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-blue-600 rounded-full">
                  {getCartItemCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {["Accueil", "Produits", "Catégories", "À propos"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isSearchOpen && (
        <div className="pb-3 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des produits..."
              className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <X
              size={18}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={toggleSearch}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

// Erreur : export par défaut mal aligné
export default Navbar;