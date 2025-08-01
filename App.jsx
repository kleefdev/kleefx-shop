import React, { useState } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import ContactForm from './components/ContactForm.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import { MOCK_PRODUCTS } from './constants.js';
import ProductDetailModal from './components/ProductDetailModal.jsx';
import FAQModal from './components/FAQModal.jsx';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleFaqOpen = () => {
    setIsFaqOpen(true);
  };

  const handleFaqClose = () => {
    setIsFaqOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onCartClick={handleCartClick} />
      <CartSidebar isOpen={isCartOpen} onClose={handleCartClose} />
      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />}
      {isFaqOpen && <FAQModal onClose={handleFaqClose} />}
      <main className="flex-grow">
        <HeroSection />
        <ProductList products={MOCK_PRODUCTS} onProductSelect={handleProductSelect} />
        <ContactForm />
      </main>
      <Footer onFaqClick={handleFaqOpen} />
    </div>
  );
};

export default App;