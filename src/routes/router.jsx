import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../component/Home";
import MainHome from "../component/Page/MainHome";
import Caterogy from "../component/Page/Caterogy";
import Login from "../component/Page/Login";
import Register from "../component/Page/Register";
import AuthLayout from "../layouts/AuthLayout";




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:'',
                element: <MainHome></MainHome>
            },
            {
                path:'/caterogy/:id',
                element:<Caterogy></Caterogy>,
                loader:()=>fetch("/news.json")
                
            },
        ]

    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path:'/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path:'/news',
        element: <h2>News</h2>
    },
    {
        path: '/home',
        element:<h1>Home page</h1>
    },
    {
        path: '/about',
        element:<h1>About page</h1>
    },
    {
        path:'/*',
        element:<h1>Error page</h1>
    }
])
export default router;