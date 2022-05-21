import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./navbaruser.css";

export default function NavbarUser() {
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
          <Navbar.Brand>
            <Nav.Link className="coin-nav-name" onClick={() => navigate("/products")}>
              <strong>COIN STORE</strong>
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link data-cy="name" className="coin-nav-name">
              {user.name}
            </Nav.Link>
            <Nav.Link data-cy="coin" className="coin-nav">
              <i className="fa-solid fa-coins coin"></i>&nbsp;{user.coin}
            </Nav.Link>
            <Button
              type="button"
              className="btn-loggout"
              data-cy="button-loggout"
              onClick={() => loggout()}
            >
              SAIR
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
