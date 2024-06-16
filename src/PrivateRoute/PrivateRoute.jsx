import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return children;
    }

    // Redirect to login page if user is not authenticated
    return (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
