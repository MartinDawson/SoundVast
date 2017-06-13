import React from 'react';

import Register from './register/register';
import Login from './login/login';
import ForgotPassword from './forgotPassword/forgotPassword';

const User = () => (
  <div>
    <Register />
    <Login />
    <ForgotPassword />
  </div>
);

export default User;
