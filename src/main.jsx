import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
// Step 01: import 3 line in main jsx.
// Step 02: create router and set basic path by creating in layout.|| Header, Home
//Step 03: set <RouterProvider router={router} /> by replcing <App> || By this 3 steps we make a route.


const router = createBrowserRouter([
{
  path: '/',
  element: <Home></Home>
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
