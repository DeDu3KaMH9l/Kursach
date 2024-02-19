// PopUpLogin.js

import React, { useState } from 'react';
import './PopUpLogin.css'; // Импортируем стили

function PopUpLogin({ onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    onLogin(username, password);
  };

  return (
    <div className="popup-container">
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-content">
        <input
          type="text"
          placeholder="Username"
          className="popup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="popup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="popup-login-button" onClick={handleLogin}>
          Войти {/* Изменяем текст кнопки */}
        </button>
      </div>
    </div>
  );
}

export default PopUpLogin;
