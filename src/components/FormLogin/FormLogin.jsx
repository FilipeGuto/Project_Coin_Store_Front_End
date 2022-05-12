import React, { useState } from "react";
import { loginUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Button,
} from "react-bootstrap";

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
      localStorage.setItem("user", JSON.stringify(logged));
      if (logged === undefined) {
        alert("Você não possui conta");
      }
      if (logged.role === "admin") {
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Insira seu email</Form.Label>
          <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Insira sua senha</Form.Label>
          <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
        variant="primary"
        type="submit"
        
        >
          Entrar
        </Button>
        {' '}
        <Button
        type="button"
        onClick={handleCreateAccount}
        >
          Ainda não tenho conta
        </Button>
      </Form>
    </div>
  );
}
