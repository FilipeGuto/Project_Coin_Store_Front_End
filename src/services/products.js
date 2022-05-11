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

export {
  getAllProducts,
};
