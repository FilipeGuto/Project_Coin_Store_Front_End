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
    saveTokenToLocalStorage(data.token);
    const info = await jwt(data.token);

    return info.user;
  } catch (error) {
    return console.log(error);
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
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNzljMmU4NGI5ZmE5MTBmY2JjNDQwOCIsIm5hbWUiOiJVc3VhcmlvIDAwMSIsImVtYWlsIjoiZW1haWwwM0BlbWFpbC5jb20iLCJyb2xlIjoidXNlciIsImNvaW4iOjEwMH0sImlhdCI6MTY1MjIyNjA2MywiZXhwIjoxNjUyNTg2MDYzfQ.2jYRlhRQs-__vL_dG_pQ8JvwHUhkK9aEwJlXUnl8uTc'
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
