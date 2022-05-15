const getTokenFromLocalStorage = () => {
  const authToken = localStorage.getItem('token');

  return authToken || '';
}

const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('token', token);
}

export {
  getTokenFromLocalStorage,
  saveTokenToLocalStorage,
};
