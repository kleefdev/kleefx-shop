import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import StarRating from './StarRating.jsx';

const ProductDetailModal = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-detail-heading"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden relative transform transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors z-10"
          aria-label="Cerrar detalles del producto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto">
          <div className="flex-grow">
            <span className="text-sm font-semibold text-sky-500 uppercase tracking-wider">{product.category}</span>
            <h2 id="product-detail-heading" className="text-3xl font-bold text-slate-900 mt-2">{product.name}</h2>

            {product.rating !== undefined && product.reviews !== undefined && (
              <div className="mt-4 flex items-center gap-2">
                <StarRating rating={product.rating} />
                <span className="text-sm text-slate-500">({product.reviews} reseñas)</span>
              </div>
            )}

            <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-4xl font-extrabold text-slate-900">{product.price}</p>
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`mt-4 w-full font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center text-lg ${
                isAdded
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-sky-500 hover:bg-sky-600 text-white transform hover:scale-105'
              }`}
            >
              {isAdded ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  ¡Añadido al carrito!
                </>
              ) : (
                'Añadir al Carrito'
              )}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProductDetailModal;