import React, { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import SyncLoader from "react-spinners/SyncLoader";
import Form from "./components/Form";
import { UserContext, UserProvider } from "./components/Context/UserContext";
import './App.css';

import Checkout from "./components/Checkout";
import { Check } from "@mui/icons-material";

function AppContent() {
  const { isUserLoggedIn } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isUserLoggedIn ? (
        <>
          <Header />
          <Home />
        </>
      ) : (
        <Form />
      ),
    },
    { path: "/about", element: <><Header /><About /></> },
    { path: "/cart", element: <><Header /><Cart /></> },
    { path: "/checkout", element: <>< Checkout/></> },
    
  ]);

  return (
    <div className="app">
      {loading ? (
        <div className="loader grid place-items-center">
          <SyncLoader color="#f9dcff" loading size={30} aria-label="Loading Spinner" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
