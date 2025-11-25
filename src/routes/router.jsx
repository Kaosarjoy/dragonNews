import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Page/Home";
import Category from "../components/Page/Category";

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
        element:<h2>This is Auth page</h2>
    },
    {
        path:'/news',
        element:<h2>This is News page</h2>
    },
    
    {
        path:'/*',
        element:<h2>No page found</h2>
    }
]
)
export default router ; 