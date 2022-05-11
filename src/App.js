import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Login,
  Register,
  Product,
  Admin,
} from './page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/products' element={<Product />} />
            <Route exact path='/admin' element={<Admin />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
