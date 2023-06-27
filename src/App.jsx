import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Ads from "./components/Ads";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Wrapper from "./components/Wrapper";

const Layout = () => {
  return (
    <>
      <Ads />
      <Wrapper>
        <Header />
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
        {},
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
