import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout: React.FC = () => {
  return (
	<div className="flex h-screen">
		<div className="w-1/2 bg-white flex items-center justify-center">
			<img src="/Logo.png" alt="Cuxie Logo" className="h-[16rem]" />
		</div>
		<div className="w-1/2 bg-primary flex items-center justify-center">
			<Outlet />
		</div>
	</div>
  );
};

export default LoginLayout;
