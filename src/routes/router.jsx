import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../component/Home";
import MainHome from "../component/Page/MainHome";
import Caterogy from "../component/Page/Caterogy";



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
        path: '/home',
        element:<h1>Home page</h1>
    },
    {
        path: '/about',
        element:<h1>About page</h1>
    },
    {
        path:'/*',
        element:<h1>404 page not found</h1>
    }
])
export default router;