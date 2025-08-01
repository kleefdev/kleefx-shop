import React, { useState } from 'react';
import StarRating from './StarRating.jsx';
import { useCart } from '../context/CartContext.jsx';

const ProductCard = ({ product, onSelect }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleCardClick = () => {
    onSelect(product);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect(product);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" 
          src={product.imageUrl} 
          alt={product.name} 
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider">{product.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-slate-800 truncate" title={product.name}>
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-slate-600 flex-grow min-h-[60px]">
          {product.description.length > 100 ? `${product.description.substring(0, 97)}...` : product.description}
        </p>
        
        {product.rating !== undefined && product.reviews !== undefined && (
          <div className="mt-3 flex items-center">
            <StarRating rating={product.rating} />
            <span className="ml-2 text-sm text-slate-500">({product.reviews} reseñas)</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-slate-900">{product.price}</p>
          <button 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300 flex items-center text-sm ${
              isAdded 
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-sky-500 hover:bg-sky-600 text-white'
            }`}
          >
            {isAdded ? (
              <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              ¡Añadido!
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Añadir al Carrito
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;