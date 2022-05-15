import React, { useState } from "react";
import { createNewUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function FormCreateUser() {
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

    const newUser = createNewUser(userData);

    if (newUser) {
      alert("Email cadrastrado com sucesso");
      navigate("/login");
    }
  };

  return (
    <div className="ctn container-fluid">
      <Container className="mt-5">
        <h1 className="title-login text-center">COIN STORE</h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto rounded-lg form-login"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Insira seu nome</Form.Label>
                <Form.Control
                  type="text"
                  data-cy="input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
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
              <Button variant="primary" type="submit">
                CRIAR
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
