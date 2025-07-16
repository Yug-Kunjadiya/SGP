import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';

const PoliceLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
      <AuthForm isLogin={isLogin} setIsLogin={setIsLogin} setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default PoliceLoginPage;
