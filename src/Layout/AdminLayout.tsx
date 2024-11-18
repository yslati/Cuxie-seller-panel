import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className='flex-1 flex flex-col'>
        <Navbar />
        <div className='flex-1 p-8'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
