import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { CodeToResetPassword } from './pages/CodeToResetPassword';
import { NewPassword } from './pages/NewPassword';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/codeToResetPassword" element={<CodeToResetPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};