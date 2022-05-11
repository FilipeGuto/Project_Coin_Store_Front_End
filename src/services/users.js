import axios from "axios";
import jwt from "jwt-decode";

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
    const info = await jwt(data.token);

    return info.user;
  } catch (error) {
    return console.log(error);
  }
};

export {
  createNewUser,
  loginUser,
};
