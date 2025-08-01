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

const Footer = ({ onFaqClick }) => {
  const handleFaqLinkClick = (e) => {
    e.preventDefault();
    onFaqClick();
  };
  
  return (
    <footer id="footer" className="bg-slate-800 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{SHOP_NAME}</h3>
            <p className="text-sm">
              Tu destino para productos de primera calidad y un servicio al cliente excepcional.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={handleNavClick} className="hover:text-sky-400 transition-colors">Inicio</a></li>
              <li><a href="#products" onClick={handleNavClick} className="hover:text-sky-400 transition-colors">Productos</a></li>
              <li><a href="#contact" onClick={handleNavClick} className="hover:text-sky-400 transition-colors">Contacto</a></li>
              <li><a href="#" onClick={handleFaqLinkClick} className="hover:text-sky-400 transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Mantente Conectado</h4>
            <p className="text-sm mb-3">Suscríbete a nuestro boletín para recibir actualizaciones.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full px-3 py-2 rounded-l-md text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
              />
              <button 
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-r-md font-semibold transition-colors text-sm"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-slate-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {SHOP_NAME}. Todos los derechos reservados.</p>
          <p className="mt-1">Diseñado con pasión por KLEEFDEV.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;