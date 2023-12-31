import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Main/Main';
import Home from './Pages/Share/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import AllToy from './Pages/AllToy/AllToy';

import React from 'react';
import ViewDetils from './Pages/ViewDetils/ViewDetils';
import MyToys from './Pages/MyToys/MyToys';
import UpdatedMyToy from './Pages/MyToys/UpdatedMyToy';
import PrivateRout from './Pages/PrivateRout/PrivateRout';
import ViewdetilsForHom from './Pages/ViewDetils/ViewdetilsForHom';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Blog from './Pages/Blog/Blog';
import AddToys from './Pages/AddToys/AddToys';
import ShopAll from './Pages/ShopAll/ShopAll';
import Payment from './Pages/Payment/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/alltoy',
        element:<AllToy />
      },
      {
        path: '/payment',
        element:<Payment/>
      }
      ,
      {
        path: '/shopAll',
        element:<ShopAll/>
      },
      {
        path: '/addedToy',
        element: <PrivateRout> <AddToys /> </PrivateRout>
      },
      {
        path:'/view/:id',
        element:<PrivateRout><ViewDetils /></PrivateRout>,
        loader: ({params}) => fetch(`https://server-forassiignment11.vercel.app/allCars/${params.id}`)
      },
      {
        path:'/viewDetilsforHom/:id',
        element:<PrivateRout><ViewdetilsForHom></ViewdetilsForHom> </PrivateRout>,
        loader: ({params}) => fetch(`https://server-forassiignment11.vercel.app/allcarForhome/${params.id}`)
      },
      {
        path: '/myToys',
        element: <PrivateRout><MyToys /></PrivateRout>
      },
      {
        path:'/updatedToy/:id',
        element:<UpdatedMyToy />,
        loader: ({params}) => fetch(`https://server-forassiignment11.vercel.app/allCars/${params.id}`)
        
      }
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider >
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>

)
