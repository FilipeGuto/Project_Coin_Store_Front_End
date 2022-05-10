import axios from "axios";

const createNewUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://project-voll-back-end.herokuapp.com/users',
      headers: { 'Content-Type': 'application/json' },
      data: { name: user.name, email: user.email, password: user.password }
    };

    const { data } = axios.request(options);

    return data;
  } catch (error) {
    return console.log(error.message);
  }
};

const loginUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://project-voll-back-end.herokuapp.com/login',
      headers: { 'Content-Type': 'application/json' },
      data: { email: user.email, password: user.password }
    };

    const { data } = await axios.request(options);

    console.log('O QUE VEM', data);

    return data;
  } catch (error) {
    return console.log(error);
  }
};

export {
  createNewUser,
  loginUser,
};
