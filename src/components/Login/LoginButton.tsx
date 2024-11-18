import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button className="bg-button text-lg text-text font-lato_700 px-8 py-3 rounded-xl shadow" onClick={() => navigate('/login')}>
        Digital Login
    </button>
  );
};

export default LoginButton;
