import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './components/contact/contact';
import { Home } from './components/Home/home';
import NotFound from './NotFound';
import Listing from './components/recipelisting/Listing';
import { About } from './components/about/About';

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
    element: <NotFound />,
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
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
