import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../AllPages/Home/Home/Home";
import Category from "../AllPages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../AllPages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../AllPages/Home/Login/Login/Login";
import Register from "../AllPages/Home/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../AllPages/Shared/Terms/Terms";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element:<Terms></Terms>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
            //     element: <Category></Category>,
            //     loader:()=>fetch('http://localhost:5000/news')
            // },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-sanjidul-alom-shifat.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-sanjidul-alom-shifat.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;