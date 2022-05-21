import React, { useContext } from "react";
import Context from "../../Context/Context";
import { Card, Row, Col } from "react-bootstrap";

export default function Cart() {
  const { cartItems, handleAddProduct, handleRemoveProduct } =
    useContext(Context);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qtd * item.price,
    0
  );

  return (
    <>
      {cartItems.length === 0 && <div>O seu carrinho está vazio</div>}
      <div>
        {cartItems.map((item) => (
          <span key={item._id}>
          <Card className="mb-3" >
            <Row className="g-0">
              <Col md={4} lg={4}>
                <Card.Body>
                  <Card.Img src={item.image} />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  {item.price} {item.quantity}
                  <div>
                    <button onClick={() => handleRemoveProduct(item)}>-</button>
                    {item.qtd}
                    {item.qtd < item.quantity ? (
                      <button onClick={() => handleAddProduct(item)}> + </button>
                    ): (
                      <button disabled>+</button>
                    )}
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          </span>
        ))}
        <div>{`Total: ${totalPrice}`}</div>
      </div>
    </>
  );
}
