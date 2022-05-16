import React, { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./cardProducts.css";

export default function CardProducts() {
  const [data, setData] = useState(null);
  const { setProduct } = useContext(Context);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function getProducts() {
      const products = await getAllProducts();
      
      setTimeout(() => {
        return setData(products);
      }, "5000");

    }
    
    getProducts();
  }, []);
  
  const handleProduct = (id, title, description, price, quantity, image) => {
    const data = {
      id,
      title,
      description,
      price,
      quantity,
      image,
    };
    
    setProduct(data);
    
    navigate(`/product/${id}`);
  };

  if (!data) return (
    <div className="loading">
      <h3>Carregando produtos...</h3>
    </div>
  );

  return (
    <div className="container mt-5">
      <Row xs={1} md={2} lg={4} className="g-4">
        {data &&
          data.map((product) => (
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
                    <Button
                      type="button"
                      onClick={() =>
                        handleProduct(
                          product._id,
                          product.title,
                          product.description,
                          product.price,
                          product.quantity,
                          product.image
                        )
                      }
                    >
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
