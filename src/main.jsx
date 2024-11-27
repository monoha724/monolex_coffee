import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLayout from "./routes/RootLayout";
import LandingPage from "./routes/LandingPage.jsx";
import Collections from "./routes/Collections";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Account from "./routes/account/Account";
import Login from "./routes/account/Login";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Product from "./routes/Product";
import Cart from "./routes/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/collections", element: <Collections /> },
      { path: "/about", element: <About /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
      { path: "/account/login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOC_ID}>
    <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
