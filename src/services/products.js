import axios from "axios";

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
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNzljMmU4NGI5ZmE5MTBmY2JjNDQwOCIsIm5hbWUiOiJVc3VhcmlvIDAwMSIsImVtYWlsIjoiZW1haWwwM0BlbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvaW4iOjEwMH0sImlhdCI6MTY1MjIyNjA2MywiZXhwIjoxNjUyNTg2MDYzfQ.2jYRlhRQs-__vL_dG_pQ8JvwHUhkK9aEwJlXUnl8uTc'
      },
      data: {
        title: product.title,
        description: product.description,
        quantity: parseInt(product.quantity),
        price: parseInt(product.price),
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
