import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
          <ShoppingBag size={24} className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
        <p className="text-gray-600 mb-8">Ajoutez des articles à votre panier pour commencer vos achats.</p>
        <Link
          to="/products"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Commencer vos achats
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre panier</h1>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-8">
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.product.id} className="py-6 flex flex-col sm:flex-row">
                <div className="flex-shrink-0 sm:mr-6">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-md"
                  />
                </div>

                <div className="flex-1 flex flex-col mt-4 sm:mt-0">
                  <div className="flex justify-between">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600"
                      >
                        {item.product.name}
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                    </div>
                    <p className="text-lg font-medium text-gray-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-700 border-r border-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:text-gray-700 border-l border-gray-300"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="flex items-center text-sm text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link to="/products" className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <ArrowRight size={16} className="mr-1 transform rotate-180" />
              Continuer vos achats
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:col-span-4">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Résumé de la commande</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Sous-total</p>
                <p className="text-gray-900 font-medium">${getCartTotal().toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-600">Livraison</p>
                <p className="text-gray-900 font-medium">
                  {getCartTotal() >= 50 ? 'Gratuit' : '$4.99'}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-600">Taxes</p>
                <p className="text-gray-900 font-medium">${(getCartTotal() * 0.1).toFixed(2)}</p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-lg font-bold text-gray-900">
                    ${(getCartTotal() + (getCartTotal() >= 50 ? 0 : 4.99) + getCartTotal() * 0.1).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/checkout"
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Passer à la caisse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;