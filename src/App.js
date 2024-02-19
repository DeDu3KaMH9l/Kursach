// App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FiltersPanel from './FiltersPanel';
import ProductCards from './ProductCards';
import ProductData from './ProductsData.json';
import PopUpLogin from './PopUpLogin'; // Импортируем компонент для модального окна авторизации

import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Состояние для отслеживания открытости модального окна

  const handleLoginButtonClick = () => {
    setIsLoginModalOpen(true); // Открываем модальное окно при нажатии на кнопку "Войти"
  };

  const handleLogin = (username, password) => {
    // Проверяем логин и пароль
    // Если успешно, выполните необходимые действия (например, вход в систему) и закройте модальное окно
    // В противном случае, вы можете показать сообщение об ошибке
    setIsLoginModalOpen(false); // Закрываем модальное окно после входа
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false); // Закрываем модальное окно при нажатии кнопки "Отмена" или вне его области
  };

  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-content">
          <SearchBar searchTerm={searchTerm} onSearchChange={(value) => setSearchTerm(value)} />
          <div className="top-bar-buttons">
            <button className="login-button" onClick={handleLoginButtonClick}>Войти</button> {/* Добавляем обработчик клика */}
            
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
          <ProductCards products={ProductData} /> {/* Используем данные продуктов */}
        </div>
      </div>

      {/* Отображаем модальное окно авторизации, если isLoginModalOpen === true */}
      {isLoginModalOpen && <PopUpLogin onClose={handleCloseLoginModal} onLogin={handleLogin} />}
    </div>
  );
};

export default App;
