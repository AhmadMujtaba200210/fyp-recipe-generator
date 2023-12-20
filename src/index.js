import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './screens/contact/contact';
import { Home } from './screens/home/home';
import NotFound from './NotFound';
import Listing from './screens/recipelisting/Listing';
import { About } from './screens/about/About';
import { Blog } from './screens/blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  },
  {
    path:"/recipe",
    element: <Listing/>,
  },
  {
    path:"/community",
    element: <NotFound/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
