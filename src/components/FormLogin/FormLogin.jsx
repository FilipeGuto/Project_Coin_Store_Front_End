import React, { useState } from "react";
import { loginUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import "./formLogin.css";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emptyText, setEmptyText] = useState("");
  const [handleError, setHandleError] = useState("");
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    if (!email && !password) {
      setEmptyText("Insira dados válidos");
    } else if (userData) {
      setTimeout(() => {
      }, "5000");
      setLoading("Carregando...");
      const logged = await loginUser(userData);
      localStorage.setItem("user", JSON.stringify(logged));
      if (logged.message) {
        setHandleError("Email ou senha incorretas");
      }
      if (logged.role === "admin") {
        return navigate("/admin");
      } else if (logged.role === "user") {
        return navigate("/products");
      } else {
        navigate("/");
      }
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    navigate("/register");
  };

  return (
    <div className="ctn container-fluid">
      <Container className="mt-5 login-container">
        <h1 className="title-login text-center">COIN STORE</h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto rounded-lg form-login lgn-container"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Insira seu email</Form.Label>
                <Form.Control
                  data-cy="input-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Insira sua senha</Form.Label>
                <Form.Control
                  data-cy="input-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" data-cy="button-login">
                ENTRAR
              </Button>{" "}
              <Button
                type="button"
                onClick={handleCreateAccount}
                data-cy="button-register"
              >
                REGISTRAR
              </Button>
              <div data-cy="empty-fields">{emptyText}</div>
              <div data-cy="error-fields">{handleError}</div>
            </Form>
          </Col>
        <span className="loading-login">{loading}</span>
        </Row>
      </Container>
    </div>
  );
}
