import React from 'react';
import { useCart } from '../context/CartContext.jsx';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleCheckout = () => {
    alert('¡Gracias por tu compra! Tu pedido ha sido realizado.');
    clearCart();
    onClose();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 id="cart-heading" className="text-2xl font-bold text-slate-800">Tu Carrito</h2>
            <button onClick={onClose} className="p-2 rounded-full text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <span className="sr-only">Cerrar carrito</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="mt-4 text-xl font-semibold text-slate-700">Tu carrito está vacío</p>
              <p className="text-slate-500 mt-2">Parece que aún no has añadido nada a tu carrito.</p>
              <button onClick={onClose} className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300">
                Empezar a Comprar
              </button>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto px-6">
              <ul className="divide-y divide-slate-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-200">
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-slate-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border border-slate-300 rounded-md">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 text-slate-600 hover:bg-slate-100 rounded-l-md">-</button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 text-slate-600 hover:bg-slate-100 rounded-r-md">+</button>
                        </div>
                        <div className="flex">
                          <button onClick={() => removeFromCart(item.id)} type="button" className="font-medium text-sky-600 hover:text-sky-500">Eliminar</button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="border-t border-slate-200 px-6 py-6">
              <div className="flex justify-between text-lg font-medium text-slate-900">
                <p>Subtotal</p>
                <p>{totalPrice.toFixed(2)} €</p>
              </div>
              <p className="mt-0.5 text-sm text-slate-500">Envío e impuestos calculados al pagar.</p>
              <div className="mt-6">
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-sky-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-600"
                >
                  Pagar
                </button>
              </div>
              <div className="mt-4 flex justify-center text-center text-sm text-slate-500">
                <p>o <button onClick={clearCart} type="button" className="font-medium text-sky-600 hover:text-sky-500">Vaciar Carrito</button></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;