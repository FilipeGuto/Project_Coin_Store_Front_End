import React, { useState } from "react";
import { createNewProduct } from "../services/products";

export default function FormLogin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      title,
      description,
      quantity,
      price,
    };

    
    if(!title && !description && !quantity && !price) {
      alert('Preencha todos os campos');
    } else if(userData) {
      await createNewProduct(userData);
      alert("Produto criado com sucesso");

      setTitle("")
      setDescription("")
      setQuantity("")
      setPrice("")
    }
  };

  return (
    <div className="form-login">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="name"
            placeholder="Insira nome do produto"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="name"
            placeholder="Insira descrição do produto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Valor do produto"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Quantidade do produto"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button value="login" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
}
