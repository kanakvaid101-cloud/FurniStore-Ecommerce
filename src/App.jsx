import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Pages/Layout";
import Store from "./Pages/Store";
import Shop from "./Pages/Shop";
import ShoppingCart from "./Pages/ShoppingCart";
import Categories from "./Pages/Categories";
import Contact from "./Pages/Contact";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "Store/:slug?",
          element: <Store />,
        },

        {
          path: "Shop/:id",
          element: <Shop />,
        },

        {
          path: "cart",
          element: <ShoppingCart />,
        },

        {
          path: "about",
          element: <About />,
        },
        {
  path: "categories",
  element: <Categories />,
},
{
  path: "contact",
  element: <Contact />,
},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}