import React, { useContext, useState } from "react";
import Context from "../../Context/Context";
import { Card, Row, Col, Navbar, Button } from "react-bootstrap";
import Modal from "../../components/Modal/Modal";
import { updateCoinUser } from "../../services/users";
import "./cart.css";

export default function Cart() {
  const [failedBuy, setFailedBuy] = useState();
  const [sucessBuy, setSuccessBuy] = useState();

  const {
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleRemove,
    clearCart,
    newUser,
    setNewUser,
  } = useContext(Context);

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qtd * item.price,
    0
  );

  const handleBuyItem = async () => {
    const myCoins = newUser.coin;
    if (totalPrice > myCoins) {
      setFailedBuy(
        <Modal
          className="failed-buy"
          title={"Saldo insuficiente"}
          text={"Desculpe mas você não tem COINS suficientes 🙁"}
          close={
            <button
              onClick={() => setFailedBuy()}
              type="button"
              className="btn btn-primary"
            >
              FECHAR
            </button>
          }
        />
      );
    }
    if (totalPrice <= myCoins) {
      setSuccessBuy(
        <Modal
          className="sucess-buy"
          title={"Compra efetuada"}
          text={
            <a
              href="https://portfolio-react-filipe-augusto.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Veja meus outros projetos, clicando aqui 😁
            </a>
          }
          close={
            <button
              onClick={() => setSuccessBuy()}
              type="button"
              className="btn btn-primary"
            >
              FECHAR
            </button>
          }
        />
      );

      const buyData = {
        email: newUser.email,
        coin: (newUser.coin = myCoins - totalPrice),
      };
      await updateCoinUser(buyData);
      setNewUser({ ...newUser }, (newUser.coin = buyData.coin));
    }
  };

  return (
    <>
      {cartItems.length === 0 && (
        <div className="empty">O seu carrinho está vazio</div>
      )}
      <div>
        {failedBuy}
        {sucessBuy}
        <Row xs={1} sm={8} md={8} lg={8} xl={5} className="g-0">
          {cartItems.map((item) => (
            <span key={item._id}>
              <Col>
                <Card className="mb-3 cart-items">
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
                </Card>
              </Col>
            </span>
          ))}
        </Row>
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
            <Button onClick={() => handleBuyItem()}>COMPRAR</Button>
          </span>
        </Navbar>
      </div>
    </>
  );
}
