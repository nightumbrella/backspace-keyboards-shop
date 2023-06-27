import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Ads from "./components/Ads";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Wrapper from "./components/Wrapper";
import BreadCrumbs from "./components/BreadCrumbs";
import KeyboardsPage from "./pages/KeyboardsPage";
import SwitchesPage from "./pages/SwitchesPage";

const Layout = () => {
  return (
    <>
      <Ads />
      <Wrapper>
        <Header />
        <BreadCrumbs/>
        <Outlet />
      </Wrapper>
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path:"/keyboards",
          element:<KeyboardsPage/>
        },
        {
          path:"/switches",
          element:<SwitchesPage/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
