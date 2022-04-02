import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Register } from './pages/Register';
import { Login } from './pages/Login';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};