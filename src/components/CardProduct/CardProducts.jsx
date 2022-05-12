import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import { Card, Row, Col } from "react-bootstrap";

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
    <div>
      {data.map((product) => (
        <div key={product._id}>
          <div>
            <Row xs={1} md={2} className="g-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <span>
                        <h5>{product.price}</h5>
                        <h6>{product.quantity}</h6>
                      </span>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      ))}
    </div>
  );
}
