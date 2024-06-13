import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../src/View/Login/Login.jsx";
import App from "./App.jsx";
import Form from "../src/View/Form/cadastroForm.jsx";
import Sobre from "../src/View/Sobre/Sobre.jsx";
import Ajuda from "../src/View/Ajuda/Ajuda.jsx";
import Carrinho from "./View/Carrinho/Carinho.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/cadastrar",
    element: <Form />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/ajuda",
    element: <Ajuda />,
  },
  {
    path: "/carrinho",
    element: <Carrinho />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
