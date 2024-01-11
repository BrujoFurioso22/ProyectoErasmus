import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Login } from "GENERAL/Login_Registro/Login";
import { LoginRegistro } from "GENERAL/Login_Registro/LoginRegistro";
// import { Registro } from "GENERAL/Login_Registro/Registro";
import { Principal } from "GENERAL/Principal/Principal";
// import { G1Principal } from "GENERAL/JUEGOS/JUEGO1/G1Principal";
// import { Game2 } from "GENERAL/JUEGOS/JUEGO2/Game2";
import { Juego4 } from "PAGES/Juego4";
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
            path: ROUTES.JUEGOS.J4,
            element: <Juego4 />,
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
