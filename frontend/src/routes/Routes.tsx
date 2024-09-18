import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import UserHome from '../pages/user/Home'
import AdminLayout from '../layouts/AdminLayout';
import AdminHome from '../pages/admin/AdminHome';
import UserRecipeCreate from '../pages/user/RecipeCreate';

export default function Routes() {
    const routes = createBrowserRouter([
        {
            path : '/',
            element : <UserLayout/>, 
            children : [
                {
                    path : '', 
                    element : <UserHome/>
                }, 
                {
                    path : '/recipe-create',
                    element : <UserRecipeCreate/>
                }
            ]
        }, 
        {
            path : '/admin', 
            element : <AdminLayout/>, 
            children : [
                {
                    path : '', 
                    element : <AdminHome/>
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={routes}></RouterProvider>
    );
}
