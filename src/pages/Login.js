import React, { useState } from 'react';
import symbol from '../assets/symbol.svg';
import logo from '../assets/logo.svg';
import './Login.css';
import api from '../services/api';


export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs/new', {
      username,
    });

    const { _id } = response.data;
    console.log(response.data);
    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <img src={symbol} alt="Tindev" />
      <img src={logo} alt="Tindev" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite seu usuário do Github." value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
