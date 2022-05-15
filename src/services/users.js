import axios from "axios";

import jwt from "jwt-decode";

import {
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
} from "../utils/authToken";

const createNewUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: 'https://project-voll-back-end.herokuapp.com/users',
      headers: { 'Content-Type': 'application/json' },
      data: { name: user.name, email: user.email, password: user.password }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    if (error) {
      const errorLog = error.response.data;
      return errorLog;
    }
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
    saveTokenToLocalStorage(data.token);
    const info = await jwt(data.token);

    return info.user;
  } catch (error) {
    if (error) {
      const errorLog = error.response.data;
      return errorLog;
    }
  }
};

const getAllUsers = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://project-voll-back-end.herokuapp.com/users',
      headers: {
        Authorization: getTokenFromLocalStorage()
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};

const updateCoinUser = async (user) => {
  try {
    const options = {
      method: 'PUT',
      url: 'https://project-voll-back-end.herokuapp.com/users',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getTokenFromLocalStorage()
      },
      data:
      {
        email: user.email,
        coin: parseInt(user.coin),
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};


export {
  createNewUser,
  loginUser,
  getAllUsers,
  updateCoinUser,
};
