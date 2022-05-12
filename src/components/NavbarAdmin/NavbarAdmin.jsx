import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function NavbarAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const loggout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <strong>STORE COIN</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>{user.name}</Nav.Link>
            <Button
            type="button"
            onClick={ () => navigate("/products")}
            >
              PRODUTOS
            </Button>
            <Button type="button" onClick={() => loggout()}>
              SAIR
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
