import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginRegistro } from "GENERAL/Login_Registro/LoginRegistro";
import { Principal } from "GENERAL/Principal/Principal";
import { Juego1 } from "PAGES/Juego1";
import { Juego2 } from "PAGES/Juego2";
import { Juego3 } from "PAGES/Juego3";
import { Perfil } from "PAGES/Perfil";
import { AcercaDePage } from "PAGES/AcercaDePage";
import { ConfiguracionJuegos } from "PAGES/ConfiguracionJuegos";

import { ROUTES } from "CONFIG/ROUTES/paths";
import { AuthContextProvider } from "CONFIG/context/authcontext";
import PublicRoute from "CONFIG/COMPONENTS/ROUTER/PublicRoute";
import PrivateRoute from "CONFIG/COMPONENTS/ROUTER/PrivateRoute";
import ProfesorRoute from "CONFIG/COMPONENTS/ROUTER/ProfesorRoute";
import EstudianteRoute from "CONFIG/COMPONENTS/ROUTER/EstudianteRoute";
import { ConfiguracionEstudiantes } from "PAGES/ConfiguracionEstudiantes";
import { ReportesProf } from "PAGES/ReportesProf";


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
    path: ROUTES.PORTAL,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        path: ROUTES.PRINCIPAL,
        element: <Principal />,
      },
      {
        path: ROUTES.PERFIL,
        element: <Perfil />,
      },
      {
        path: ROUTES.ACERCADE,
        element: <AcercaDePage />,
      },
      {
        path: "/",
        element: <ProfesorRoute />,
        children: [
          {
            index: true,
            path: ROUTES.PRINCIPAL,
            element: <Principal />,
          },
          {
            path: ROUTES.CONFIGURACION_JUEGOS,
            element: <ConfiguracionJuegos />,
          },
          {
            path: ROUTES.CONFIGURACION_ESTUDIANTES,
            element: <ConfiguracionEstudiantes />,
          },
          {
            path: ROUTES.REPORTES_PROFESOR,
            element: <ReportesProf />,
          },
        ],
      },
      {
        path: "/",
        element: <EstudianteRoute />,
        children: [
          {
            index: true,
            path: ROUTES.PRINCIPAL,
            element: <Principal />,
          },
          {
            path: ROUTES.JUEGOS.J1,
            element: <Juego1 />,
          },
          {
            path: ROUTES.JUEGOS.J2,
            element: <Juego2 />,
          },
          {
            path: ROUTES.JUEGOS.J3,
            element: <Juego3 />,
          },
          {
            path: ROUTES.JUEGOS.J4,
            element: <Juego2 />,
          },
        ],
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
