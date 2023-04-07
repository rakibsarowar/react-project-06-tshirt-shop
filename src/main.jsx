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
// Step 01: import 3 line in main jsx.
// Step 02: create router and set basic path by creating in layout.|| Header, Home
//Step 03: set <RouterProvider router={router} /> by replcing <App> || By this 3 steps we make a route.
//Step04: crate laout in conponent which name can be, root, main, admin. Where 1/2 part will be common like header and other will be change able.
// Step 05: our common section will be Header and after will use <Outlet> for route items.

const router = createBrowserRouter([
{
  path: '/',
  element: <Main></Main>
}

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
