import React, { useContext } from "react";
import Context from "../../Context/Context";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import "./cart.css";

export default function Cart() {
  const {
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleRemove,
    clearCart,
  } = useContext(Context);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qtd * item.price,
    0
  );

  return (
    <>
      {cartItems.length === 0 && (
        <div className="empty">O seu carrinho está vazio</div>
      )}
      <div>
        {cartItems.map((item) => (
          <span key={item._id}>
            <Card className="mb-3">
              <Row className="g-0">
                <Col md={4} lg={4}>
                  <Card.Body>
                    <Button
                      className="remove-item text-right btn-danger"
                      onClick={() => handleRemove(item)}
                    >
                      X
                    </Button>
                    <Card.Img className="cart-img" src={item.image} />
                    <Card.Title className="cart-title">{item.title}</Card.Title>
                    <Card.Text className="p-cart">{item.description}</Card.Text>
                    <Card.Footer>
                      <span className="price-cart">
                        <h5>{item.price}</h5>
                        <div className="quantity">
                          <h6>Quantidade disponivel</h6>
                          <h4>{item.quantity}</h4>
                        </div>
                      </span>
                    </Card.Footer>
                    <div className="btn-container">
                      {item.qtd === 1 ? (
                        <Button disabled>-</Button>
                      ) : (
                        <Button onClick={() => handleRemoveProduct(item)}>
                          -
                        </Button>
                      )}
                      <div className="item-quantity">{item.qtd}</div>
                      {item.qtd < item.quantity ? (
                        <Button onClick={() => handleAddProduct(item)}>
                          +
                        </Button>
                      ) : (
                        <Button disabled>+</Button>
                      )}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </span>
        ))}
        <Navbar
          className="container-fluid fixed-bottom total-container"
          bg="dark"
        >
          <div className="total">
            <h2>Valor total</h2>
            <h2>{`$ ${totalPrice}`}</h2>
          </div>
          <span className="btn-opt">
            <Button onClick={() => clearCart()}>LIMPAR CARRINHO</Button>
            <Button variant="secondary">COMPRAR</Button>
          </span>
        </Navbar>
      </div>
    </>
  );
}
