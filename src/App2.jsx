import React from 'react'
import Signup from './components/SignUp'
import SignIn from './components/SignIn.JSX'
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from './components/ResetPassword';
import AppRoutes from './AppRoutes.jsx';

const App2 = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  )
}

export default App2
