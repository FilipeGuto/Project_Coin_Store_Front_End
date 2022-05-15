import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./cardProducts.css"

export default function CardProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();

      return setData(products);
    }

    getProducts();
  }, []);

  return (
    <div className="container mt-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {data && data.map((product) => (
          <Col>
            <Card>
              <Card.Img src={product.image} />
              <Card.Body>
                <Card.Title className="title-product">{product.title}</Card.Title>
                <Card.Text className="p-product">{product.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <span className="price-product">
                  <h5>{product.price}</h5>
                  <Button>
                    COMPRAR
                  </Button>
                </span>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
