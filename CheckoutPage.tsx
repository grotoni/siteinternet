import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CreditCard, Check, Info } from 'lucide-react';

type CheckoutStep = 'shipping' | 'payment' | 'review' | 'confirmation';

const CheckoutPage: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'FR',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 'shipping') {
      setCurrentStep('payment');
    } else if (currentStep === 'payment') {
      setCurrentStep('review');
    } else if (currentStep === 'review') {
      setCurrentStep('confirmation');
      setOrderPlaced(true);
      clearCart();
    }
    window.scrollTo(0, 0);
  };

  const renderProgressBar = () => {
    const steps = [
      { id: 'shipping', label: 'Livraison' },
      { id: 'payment', label: 'Paiement' },
      { id: 'review', label: 'Révision' },
      { id: 'confirmation', label: 'Confirmation' },
    ];

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === step.id
                      ? 'bg-blue-600 text-white'
                      : steps.findIndex((s) => s.id === currentStep) > index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {steps.findIndex((s) => s.id === currentStep) > index ? (
                    <Check size={16} />
                  ) : (
                    index + 1
                  )}
                </div>
                <p className="mt-2 text-xs text-gray-500">{step.label}</p>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 ${
                    steps.findIndex((s) => s.id === currentStep) > index
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'shipping':
        return renderShippingForm();
      case 'payment':
        return renderPaymentForm();
      case 'review':
        return renderOrderReview();
      case 'confirmation':
        return renderOrderConfirmation();
      default:
        return null;
    }
  };

  const renderShippingForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <Link
          to="/cart"
          className="mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Retour au panier
        </Link>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continuer au paiement
        </button>
      </div>
    </form>
  );

  const renderOrderConfirmation = () => (
    <div className="text-center py-12">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
        <Check size={32} className="text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Merci pour votre commande !</h2>
      <p className="text-gray-600 mb-8">
        Votre commande a été passée avec succès. Un email de confirmation a été envoyé à {formData.email}.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
      >
        Retour à l'accueil
      </Link>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Passer la commande</h1>
      {!orderPlaced && renderProgressBar()}
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-8">{renderCurrentStep()}</div>
      </div>
    </div>
  );
};

// Erreur : export par défaut mal aligné
export default CheckoutPage;