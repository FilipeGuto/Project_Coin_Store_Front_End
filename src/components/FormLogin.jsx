import React, { useState } from "react";
import { loginUser } from "../services/users";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    
    if (!email && !password) {
      alert("Inisira email e senha validas");
    } else if (userData) {
      const logged = await loginUser(userData);
      localStorage.setItem('user', JSON.stringify(logged));
      if( logged === undefined) {
        alert("Você não possui conta");
      }
      if(logged.role ===  "admin") {
        navigate("/admin");
      } else {
        navigate("/products");
      }
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <div className="change-form">
        <button type="button" value="register" onClick={handleCreateAccount}>
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}
