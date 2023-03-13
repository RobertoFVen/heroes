import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from '../auth';
import { ChildRoutes, HeroesRoutes } from '../heroes/routes/HeroesRoutes';


const router = createBrowserRouter([
    {
        path: "login",
        element: <LoginPage />        
    },
    {
        path: "/*",
        element: <HeroesRoutes />,
        children: ChildRoutes
    }
   
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={ router } />
  )
}
