import React, { useContext, useState } from "react";
import NavbarAdmmin from "../components/NavbarAdmin/NavbarAdmin";
import { updateCoinUser, deleteUser } from "../services/users";
import { useNavigate } from "react-router";
import { Card, Button, Form } from "react-bootstrap";
import Modal from "../components/Modal/Modal";
import Context from "../Context/Context";

export default function UserCoin() {
  const { updateUser, setUpdateUser } = useContext(Context);
  const [coin, setCoin] = useState("");
  const [emptyText, setEmptyText] = useState("");
  const [sucess, setSucess] = useState("");
  const [deletedUser, setDeletedUser] = useState("");
  const navigate = useNavigate();

  const updateCoin = async (e) => {
    e.preventDefault();

    const update = {
      email: updateUser.email,
      coin: coin,
    };

    if (!coin) {
      setEmptyText("Preencha o campo de nova quantia");
    } else if (update) {
      await updateCoinUser(update);
      setSucess("Moedas alterada com sucesso");

      setUpdateUser(update);

      setCoin("");
    }
  };

  const userDeleted = async () => {
    const { id } = updateUser;

    if (id) {
      await deleteUser(id);
      setSucess("Usuario deletado com sucesso");

      setUpdateUser(id);
    }
  };

  const handleDeleteUSer = () => {
    setDeletedUser(
      <Modal
        className="deleted-user"
        title={"Deletar Usuario"}
        text={"Tem certeza que deseja excluir esse usuario? 🙁"}
        save={
          <button
            onClick={() => {
              userDeleted()
              setDeletedUser()
            }}
            type="button"
            className="btn btn-danger"
          >
            SIM
          </button>
        }
        close={
          <button
            onClick={() => setDeletedUser()}
            type="button"
            className="btn btn-primary"
          >
            NÃO
          </button>
        }
      />
    );
  };

  return (
    <div>
      <NavbarAdmmin />
      {deletedUser}
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
            variant="danger"
            type="button"
            onClick={() => handleDeleteUSer()}
          >
            DELETAR
          </Button>{" "}
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
      <div className="loading">
        {emptyText}
        {sucess}
      </div>
    </div>
  );
}
