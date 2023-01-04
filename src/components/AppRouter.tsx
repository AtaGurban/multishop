import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import Main from '../pages/Main/Main';
import { publicRoutes } from '../routes';


const AppRouter:FC = () => {
    return (
        <Routes>
            {
                publicRoutes.map((route)=>
                    <Route
                    key={route.path}
                    path={route.path}
                    element={<Main/>}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;