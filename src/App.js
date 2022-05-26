import jwt from "jwt-decode";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import {
  Login,
  Register,
  Product,
  Admin,
  UserCoin,
  CartPage,
  NotFound,
} from './page';

const PrivateRoute = ({ children, redirectTo }) => {
  const authToken = localStorage.getItem('token');
  const { user } = jwt(authToken);

  return user.role === "admin" ? children : <Navigate to={redirectTo} />;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/products' element={<Product />} />
          <Route exact path='/products/cart' element={<CartPage />} />
          <Route exact path='/admin' element={<PrivateRoute redirectTo={"/"}><Admin /></PrivateRoute>} />
          <Route exact path='/admin/update_user' element={<PrivateRoute redirectTo={"/"}><UserCoin /></PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
