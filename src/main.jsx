import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OrderReview from './components/OrderReview/OrderReview';
// Step 01: import 3 line in main jsx.
// Step 02: create router and set basic path by creating in layout.|| Header, Home
//Step 03: set <RouterProvider router={router} /> by replcing <App> || By this 3 steps we make a route.
//Step04: crate laout in conponent which name can be, root, main, admin. Where 1/2 part will be common like header and other will be change able.
// Step 05: our common section will be Header and after will use <Outlet> for route items.
//Step06: Next we will set up children_ children:[{ }] in main jsx. and first child will be <Home> and path '/'
//Step07: improve the Header with Nav manu by link & to. & after usuing css, carefull to import in jsx.

const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>,
  children:[
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'review',
      element:<OrderReview></OrderReview>
    }
  ]
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
