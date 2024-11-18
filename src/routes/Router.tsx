import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ProtectedRoute from './ProtectedRoute';
import AdminLayout from '../Layout/AdminLayout';
import NotFound from '../pages/NotFound';
import LoginLayout from '../Layout/LoginLayout';
import LoginButton from '../components/Login/LoginButton';
import { useAppSelector } from '../store/hooks';

const AppRouter: React.FC = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
            <Routes>
                <Route path="/" element={<LoginLayout />}>
                    <Route index element={<LoginButton />} />
                    <Route path="login" element={<Login />} />
                </Route>

                <Route path="dashboard" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <AdminLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Dashboard />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
