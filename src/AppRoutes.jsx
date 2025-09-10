import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import NotFound from './components/NotFound.jsx';
import App from './App.jsx';
import App3 from './App3.jsx'
import SignUp from "./components/Signup.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path='/About' element={<App3/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
