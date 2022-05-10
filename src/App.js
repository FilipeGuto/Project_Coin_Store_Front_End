import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Login,
  Register,
} from './page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
