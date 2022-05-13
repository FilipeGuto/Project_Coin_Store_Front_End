import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./navbaradmin.css";

export default function NavbarAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const loggout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="container-fluid">
        <Container>
          <Navbar.Brand><strong>COIN STORE</strong></Navbar.Brand>
          <Nav>
            <Nav.Link className="coin-nav">{user.name}</Nav.Link>
            <Button className="btn-loggout" type="button" onClick={() => navigate("/products")}>
              PRODUTOS
            </Button>
            <Button className="btn-loggout" type="button" onClick={() => loggout()}>
              SAIR
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
