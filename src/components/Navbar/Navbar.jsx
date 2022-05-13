import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./navbaruser.css"

export default function NavbarUser() {
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
            <Navbar.Brand><strong>COIN STORE</strong></Navbar.Brand>
            <Nav>
              <Nav.Link className="coin-nav">{user.name}</Nav.Link>
              <Nav.Link className="coin-nav"><i className="fa-solid fa-coins coin"></i>&nbsp;{user.coin}</Nav.Link>
              <Button
              type="button"
              className="btn-nav"
              onClick={() => loggout()}
              >SAIR
              </Button>
            </Nav>
          </Container>
        </Navbar>
    </>
  );
}
