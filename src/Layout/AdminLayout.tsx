import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AdminLayout: React.FC = () => {
  return (
    <div className="">
        <Navbar />
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default AdminLayout;
