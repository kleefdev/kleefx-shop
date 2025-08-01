import React from 'react';
import { SHOP_NAME } from '../constants.js';

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


const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Bienvenido a <span className="text-sky-400">{SHOP_NAME}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Descubre una cuidada selección de productos de alta calidad diseñados para mejorar tu estilo de vida. Excelencia en cada detalle.
        </p>
        <div className="mt-10">
          <a
            href="#products"
            onClick={handleNavClick}
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105 text-lg"
          >
            Compra Nuestra Colección
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;