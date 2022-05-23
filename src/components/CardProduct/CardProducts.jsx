import React, { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import Context from "../../Context/Context";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./cardProducts.css";

export default function CardProducts() {
  const [data, setData] = useState(null);
  const { handleAddProduct } = useContext(Context);

  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts([]);

      setTimeout(() => {
        return setData(products);
      }, "7000");
    }

    getProducts();
  }, []);

  if (!data)
    return (
      <div className="loading">
        <h3>Carregando produtos...</h3>
      </div>
    );

  return (
    <div className="container mt-5 mb-5 product-container">
      <Row xs={1} md={2} lg={4} className="g-4">
        {data &&
          data.map((product) => (
            <span key={product._id}>
              <Col>
                <Card className="card-product">
                  <Card.Img src={product.image} className="img-product" />
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
                      <Button
                        type="button"
                        className="btn-add-cart"
                        onClick={() => handleAddProduct(product)}
                      >
                        ADICIONAR <br></br>AO CARRINHO
                      </Button>
                    </span>
                  </Card.Footer>
                </Card>
              </Col>
            </span>
          ))}
      </Row>
    </div>
  );
}
