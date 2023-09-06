import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import ErrorElement from "./components/ErrorElement";
import About from "./components/About";
import Contact from "./components/Contact";
import Restaurants from "./components/Restaurants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppContainer = () => (
  <div className="app-container">
    <Header />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurants />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<RouterProvider router={appRouter} />);
