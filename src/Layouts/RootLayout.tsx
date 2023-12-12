// src/Layouts/RootLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout: React.FC = () => {


    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;
