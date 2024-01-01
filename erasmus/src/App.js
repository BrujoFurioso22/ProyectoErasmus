import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Login } from "GENERAL/Login_Registro/Login";
import { LoginRegistro } from "GENERAL/Login_Registro/LoginRegistro";
// import { Registro } from "GENERAL/Login_Registro/Registro";
import { Principal } from "GENERAL/Principal/Principal";
// import { G1Principal } from "GENERAL/JUEGOS/JUEGO1/G1Principal";
// import { Game2 } from "GENERAL/JUEGOS/JUEGO2/Game2";

import { ROUTES } from "CONFIG/ROUTES/paths";
import { AuthContextProvider } from "CONFIG/context/authcontext";
import PublicRoute from "CONFIG/COMPONENTS/ROUTER/PublicRoute";
import PrivateRoute from "CONFIG/COMPONENTS/ROUTER/PrivateRoute";
// import { G2Principal } from "GENERAL/JUEGOS/JUEGO2/G2Principal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        path: ROUTES.LOGINREGISTRO,
        element: <LoginRegistro />,
      },
    ],
  },
  {
    path: ROUTES.PRINCIPAL,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        path: ROUTES.PRINCIPAL,
        element: <Principal />,
      },
    ],
  },
]);

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
