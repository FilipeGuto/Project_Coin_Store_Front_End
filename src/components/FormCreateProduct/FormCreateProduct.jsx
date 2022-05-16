import React, { useState } from "react";
import { createNewProduct } from "../../services/products";
import { Form, Button } from "react-bootstrap";

export default function FormCreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [emptyText, setEmptyText] = useState("");
  const [sucess, setSucess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      title,
      description,
      quantity,
      price,
      image,
    };

    if (!title && !description && !quantity && !price && !image) {
      setEmptyText("Preencha todos os campos");
    } else if (userData) {
      await createNewProduct(userData);
      setSucess("Produto criado com sucesso");

      setTitle("");
      setDescription("");
      setQuantity("");
      setPrice("");
      setImage("");
    }
  };

  return (
    <div className="form-login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome do produto</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Descrição</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Valor Unitario</Form.Label>
          <Form.Control
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Imagem do produto</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          CRIAR
        </Button>
        <div className="loading">
          {emptyText}
          {sucess}
        </div>
      </Form>
    </div>
  );
}
