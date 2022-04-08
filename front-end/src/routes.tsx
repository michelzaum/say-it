import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { NewPassword } from './pages/NewPassword';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};