import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Page/Home";
import Category from "../components/Page/Category";
import PageError from "../components/ErrorPage/PageError";
import Login from "../components/Page/Login";
import Register from "../components/Page/Register";

const router = createBrowserRouter(
    [
    {
        path:'/',
       Component:HomeLayout,
       children:[
        {
            path:'',
            Component:Home
        },
        {
            path:'/category/:id',
            Component:Category,
            loader:()=>fetch("/news.json")
        }
       ]
    },
    {
        path:'/auth',
        children:[
            {
                path:'/auth/login',
                Component:Login
            },
            {
                path:'/auth/register',
                Component:Register
            }
        ]
    },
    {
        path:'/news',
        element:<h2>This is News page</h2>
    },
    
    {
        path:'/*',
        Component:PageError
    }
]
)
export default router ; 