import React, { useState, useContext } from "react";
import { createNewUser } from "../../services/users";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function FormCreateUser() {
  const { setNewUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emptyText, setEmptyText] = useState("");
  const [handleError, setHandleError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    if (!name && !email && !password) {
      setEmptyText("Insira dados válidos");
    } else if (userData) {
      const create = await createNewUser(userData);
      if (create.message) {
        setHandleError("Email já cadastrado");

        setName('')
        setEmail('')
        setPassword('')

        navigate("/register");
      } else {
        setNewUser(create);
        navigate("/products");
      }
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
                  data-cy="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Insira sua senha</Form.Label>
                <Form.Control
                  type="password"
                  data-cy="input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button data-cy="button-submit" type="submit">
                LOGAR
              </Button>
              <div>{emptyText}</div>
              <div>{handleError}</div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
