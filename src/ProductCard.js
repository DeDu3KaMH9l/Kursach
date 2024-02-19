// ProductCard.js
import React from 'react';
import './productCard.css'; // Импорт файла стилей для карточки товара

const ProductCard = ({ product }) => {
  // Проверяем, существует ли объект product и содержит ли он свойство 'image'
  if (!product || !product.image) {
    return null; // Если не существует, возвращаем null или другой компонент заглушки
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price} ₽</p>
        <p className="product-availability">В наличии: {product.inStock ? 'да' : 'нет'}</p>
        <p className="product-packaging">Фасовка: {product.packaging}.</p>
      </div>
      <button className="add-to-cart-button">Добавить в корзину</button>
    </div>
  );
};

export default ProductCard;
