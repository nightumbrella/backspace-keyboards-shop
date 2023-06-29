import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Ads from "./components/Ads";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Wrapper from "./components/Wrapper";
import BreadCrumbs from "./components/BreadCrumbs";
import KeyboardsPage from "./pages/KeyboardsPage";
import SwitchesPage from "./pages/SwitchesPage";
import ProductDetails from "./pages/ProductDetails";
import ShopCategory from "./components/ShopCategory";
import Sound from "./components/Sound";
import Wishlist from "./pages/Wishlist";
import CartPage from "./pages/CartPage";

const Layout = () => {
  const [showShopCategory, setShowShopCategory] = useState(false)
  const toggleShopCategory = () => {
    setShowShopCategory(!showShopCategory)
  }
  return (
    <>
      <Ads />
      <Wrapper>
        <Header toggleShopCategory={toggleShopCategory} />
        {
          showShopCategory && <ShopCategory toggleShopCategory={toggleShopCategory} />
        }
        <BreadCrumbs />
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
          path: "/keyboards",
          element: <KeyboardsPage />
        },
        {
          path: "/keyboards/:name",
          element: <ProductDetails />
        },
        {
          path: "/switches",
          element: <SwitchesPage />
        },
        {
          path: "/switches/:name",
          element: <ProductDetails />
        },
        {
          path: "/Sound",
          element: <Sound />
        },
        {
          path: "/Wishlist",
          element: <Wishlist />
        },
        {
          path: "/Cart",
          element: <CartPage />
        },
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
