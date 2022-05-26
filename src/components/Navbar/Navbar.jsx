import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Context from "../../Context/Context";
import "./navbaruser.css";

export default function NavbarUser() {
  const { newUser } = useContext(Context);
  const navigate = useNavigate();

  const loggout = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="container-fluid fixed-top">
        <Container className="nav-product">
          <Navbar.Brand>
            <Nav.Link className="nav-coin-logo" onClick={() => navigate("/products")}>
              <strong>COIN STORE</strong>
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link data-cy="coin" className="coin-nav">
              <i className="fa-solid fa-coins coin"></i>&nbsp;{newUser.coin}
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
