// ProductCards.js

import React from 'react';
import ProductCard from './ProductCard'; // Путь к компоненту ProductCard

const ProductCards = ({ products }) => {
  return (
    <div className="product-cards">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards; // Вот здесь должен быть правильный экспорт
