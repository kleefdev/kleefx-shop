import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Ponte en Contacto
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            ¿Tienes alguna pregunta o quieres trabajar con nosotros? Rellena el siguiente formulario.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <form action="https://formspree.io/f/xovllbje" method="POST">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 border-gray-300 rounded-md"
                  placeholder="Dirección de correo electrónico"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-sky-500 focus:border-sky-500 border border-gray-300 rounded-md"
                  placeholder="Tu mensaje"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;