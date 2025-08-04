import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";

const INITIAL_VISIBLE = 4; // Number of products to show initially
const LOAD_MORE_COUNT = 4; // Number of products to show each time

const ProductList = ({ products, onProductSelect }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  if (!products || products.length === 0) {
    return (
      <p className="text-center text-slate-500 py-10">
        No se encontraron productos.
      </p>
    );
  }

  const visibleProducts = products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div id="products" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-12 text-center">
        Nuestros Productos Destacados
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onProductSelect}
          />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="mt-8">
          <button
            type="button"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
            onClick={handleLoadMore}
          >
            Ver Más Productos
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
