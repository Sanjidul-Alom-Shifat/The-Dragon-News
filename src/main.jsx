import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routers/Routers';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
