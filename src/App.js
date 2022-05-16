import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Login,
  Register,
  Product,
  Admin,
  UserCoin,
  Checkout,
} from './page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/product/:id' element={<Checkout />} />
            <Route exact path='/products' element={<Product />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/admin/update_user' element={<UserCoin />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
