import React from 'react'
import Root from "./routes/root";
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import ErrorPage from './error-page';
import Product from './routes/product';
import Products from './routes/products';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "products/:productId",
        element: <Product/>,
    
      },
      {
        path: "/products",
        element: <Products/> 
      }

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
