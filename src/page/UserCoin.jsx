import React, { useContext, useState } from "react";
import NavbarAdmmin from "../components/NavbarAdmin/NavbarAdmin";
import { updateCoinUser } from "../services/users";
import { useNavigate } from "react-router";
import Context from "../Context/Context";
import { Card, Button, Form } from "react-bootstrap";

export default function UserCoin() {
  const { updateUser, setUpdateUser } = useContext(Context);
  const [coin, setCoin] = useState("");
  const navigate = useNavigate();

  const updateCoin = async (e) => {
    e.preventDefault();

    const update = {
      email: updateUser.email,
      coin: coin,
    };

    if (!coin) {
      alert("Preencha o campo de moedas");
    } else if (update) {
      await updateCoinUser(update);
      alert("Moedas alterada com sucesso");

      setUpdateUser(update);

      setCoin("");
    }
  };

  return (
    <div>
      <NavbarAdmmin />
      <Card className="text-center mt-5">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title className="mb-3">{updateUser.email}</Card.Title>
          <Card.Body>QUANTIDADE DE MOEDAS: {updateUser.coin}</Card.Body>
          <Form.Group className="mb-3 container">
            <Form.Control
              type="number"
              placeholder="Nova quantia"
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={updateCoin}>
            ALTERAR
          </Button>{" "}
          <Button
          variant="secondary"
          type="button"
          >
            DELETAR
          </Button>{' '}
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/admin")}
          >
            VOLTAR
          </Button>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
