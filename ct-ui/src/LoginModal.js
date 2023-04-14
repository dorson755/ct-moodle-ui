import React, { useState } from 'react';
import axios from 'axios';

const LoginModal = ({ showModal, onCloseModal, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://cybertech242-online.com/login', {
        username: username,
        password: password,
        service: 'moodle_mobile_app'
      });
      onLogin(response.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onCloseModal}>&times;</span>
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
