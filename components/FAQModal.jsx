import React, { useEffect, useState } from 'react';

const faqs = [
  {
    question: '¿Cómo hago el seguimiento de mi pedido?',
    answer: 'Una vez que tu pedido haya sido enviado, recibirás un correo electrónico con un número de seguimiento y un enlace al sitio web del transportista. Puedes usar esto para rastrear el estado de tu entrega.',
  },
  {
    question: '¿Cuál es su política de devoluciones?',
    answer: 'Ofrecemos una política de devolución de 30 días para artículos no utilizados en su embalaje original. Para iniciar una devolución, por favor contacta a nuestro equipo de soporte a través del formulario de contacto en nuestro sitio web.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos las principales tarjetas de crédito (Visa, MasterCard, American Express), así como PayPal y otras pasarelas de pago seguras. Todas las transacciones están encriptadas para tu seguridad.',
  },
  {
    question: '¿Cuánto tarda el envío?',
    answer: 'El envío estándar suele tardar de 5 a 7 días hábiles. Hay opciones de envío rápido disponibles al finalizar la compra para una entrega más rápida. Los tiempos de envío internacional pueden variar.',
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-800 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-2 text-slate-600">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQModal = ({ onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);
  
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);
  
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="faq-heading"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden relative transform transition-transform duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 id="faq-heading" className="text-2xl font-bold text-slate-900">Preguntas Frecuentes</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors z-10"
            aria-label="Cerrar FAQ"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
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

export default FAQModal;