import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Context from "../Context/Context";
import { Card, Button, Row, Col } from "react-bootstrap";

export default function Checkout() {
  const { product } = useContext(Context);

  return (
    <>
      <Navbar />
      <div className="left">
        <div className="container mt-5">
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card>
                <Card.Img src={product.image} />
                <Card.Body>
                  <Card.Title className="title-product">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="p-product">
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <span className="price-product">
                    <h5>{product.price}</h5>
                    </span>
                      <Button variant="secondary">-</Button> {product.quantity}{" "}
                      <Button variant="secondary">+</Button>{" "}
                    <Button variant="secondary" type="button">
                      COMPRAR
                    </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="right">PARTE AINDA EM DESENVOLVIMENTO</div>
      </div>
    </>
  );
}
