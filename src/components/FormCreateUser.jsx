import React, { useState } from "react";
import { createNewUser } from '../services/users';
import { useNavigate } from 'react-router-dom';


export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    const newUser = createNewUser(userData)

    if(newUser) {
      navigate('/login');
    }
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="name"
            placeholder="Insira seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button variant="primary" value="login" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
}
