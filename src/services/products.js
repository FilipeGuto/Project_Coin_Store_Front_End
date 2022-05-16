import axios from "axios";
import {
  getTokenFromLocalStorage,
} from "../utils/authToken";

const getAllProducts = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://project-voll-back-end.herokuapp.com/products',
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error.message);
  }
};

const createNewProduct = async (product) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://project-voll-back-end.herokuapp.com/products',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getTokenFromLocalStorage()
      },
      data: {
        title: product.title,
        description: product.description,
        quantity: parseInt(product.quantity),
        price: parseInt(product.price),
        image: product.image,
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error.message);
  }
};

export {
  getAllProducts,
  createNewProduct,
};
