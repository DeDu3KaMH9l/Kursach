import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import FiltersPanel from './FiltersPanel';
import ProductCards from './ProductCards';
import ProductData from './ProductsData.json';
import AddProductPage from './AddProductPage';

import './App.css'; // Вот это добавляем

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredProducts = ProductData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = selectedFilters.length === 0 || selectedFilters.includes(product.category);
    return matchesSearch && matchesFilters;
  });

  return (
    <Router>
      <div>
        <div className="top-bar">
          <div className="top-bar-content">
            <SearchBar searchTerm={searchTerm} onSearchChange={(value) => setSearchTerm(value)} />
            <div className="top-bar-buttons">
              <button className="login-button">Войти</button>
              <Link to="/add-product" className="add-button">Добавить</Link>
              <img src="https://example.com/cart-icon.png" alt="Cart" className="cart-icon" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <div className="filters-panel">
            <FiltersPanel
              selectedFilters={selectedFilters}
              onFilterChange={(filters) => setSelectedFilters(filters)}
            />
          </div>

          <div className="product-cards">
            <ProductCards products={filteredProducts} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
