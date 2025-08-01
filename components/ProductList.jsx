import React from 'react';
import ProductCard from './ProductCard.jsx';

const ProductList = ({ products, onProductSelect }) => {
  if (!products || products.length === 0) {
    return <p className="text-center text-slate-500 py-10">No se encontraron productos.</p>;
  }

  return (
    <div id="products" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12 text-center">
        Nuestros Productos Destacados
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onProductSelect} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;