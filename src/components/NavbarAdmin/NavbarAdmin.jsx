import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Context from "../../Context/Context";
import "./navbaradmin.css";

export default function NavbarAdmin() {
  const { newUser } = useContext(Context)
  const navigate = useNavigate();

  const loggout = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="container-fluid fixed-top">
        <Container className="nav-admin">
          <Navbar.Brand className="logo"><strong>COIN STORE</strong></Navbar.Brand>
          <Nav>
            <Nav.Link data-cy="name" className="nav-name-admin">{newUser.name}</Nav.Link>
            <button data-cy="button-product" className="btn-loggout" type="button" onClick={() => navigate("/products")}>
              PRODUTOS
            </button>
            <button data-cy="button-loggout" className="btn-loggout" type="button" onClick={() => loggout()}>
              SAIR
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
