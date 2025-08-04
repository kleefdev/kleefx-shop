import React, { useState } from 'react';
import { SHOP_NAME } from '../constants.js';
import { useCart } from '../context/CartContext.jsx';

// Este manejador evitará recargas de página completas y proporcionará un desplazamiento suave.
const handleNavClick = (e) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href) return;

  const targetId = href.substring(1);
  const targetElement = targetId ? document.getElementById(targetId) : null;

  if (targetElement) {
    // Desplazarse a la sección específica.
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    // Para href="#" o si el elemento no existe, desplazarse a la parte superior de la página.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const NavLink = ({ href, children, className, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick || handleNavClick}
      className={className || "text-gray-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"}
    >
      {children}
    </a>
  );
};

const Header = ({ onCartClick }) => {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = (e) => {
    handleNavClick(e);
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="bg-slate-800 shadow-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" onClick={handleNavClick} className="flex-shrink-0">
              <span className="text-3xl font-bold text-white tracking-tight">
                {SHOP_NAME}
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#">Inicio</NavLink>
              <NavLink href="#products">Productos</NavLink>
              <NavLink href="#contact">Contacto</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <button
              aria-label="Buscar"
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button
              onClick={onCartClick}
              aria-label="Carrito de Compras"
              className="ml-3 p-2 relative rounded-full text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            {/* Mobile menu button */}
            <div className="ml-3 flex items-center md:hidden">
                <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink href="#" onClick={handleMobileLinkClick} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</NavLink>
          <NavLink href="#products" onClick={handleMobileLinkClick} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Productos</NavLink>
          <NavLink href="#contact" onClick={handleMobileLinkClick} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;