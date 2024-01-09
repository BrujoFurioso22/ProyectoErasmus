
import { ROUTES } from "CONFIG/ROUTES/paths";
import { useAuthContext } from "CONFIG/context/authcontext";

//JSON con para el usuario normal
const jsonData_EstudianteUser = [
  {
    title: "Inicio",
    icon: "bi-house",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Juegos",
    icon: "bi bi-controller",
    children: [
      {
        title: "Juego1",
        icon: "",
        path: ROUTES.JUEGOS.J1,
      },
      {
        title: "Juego2",
        icon: "",
        path: ROUTES.JUEGOS.J2,
      },
      {
        title: "Juego3",
        icon: "",
        path: ROUTES.JUEGOS.J3,
      },
      {
        title: "Lienzo",
        icon: "",
        path: ROUTES.JUEGOS.J4,
      },
    ],
  },
  {
    title: "Acerca de",
    icon: "bi bi-info-circle",
    path: ROUTES.ACERCADE,
  },
  
];

//JSON para un usuario administrador
const jsonData_ProfesorUser = [
  {
    title: "Inicio",
    icon: "bi-house",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Configuración Juegos",
    icon: "bi bi-controller",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Configuración Estudiantes",
    icon: "bi bi-people",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Reportes",
    icon: "bi bi-clipboard2-data",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Acerca de",
    icon: "bi bi-info-circle",
    path: ROUTES.ACERCADE,
  },
];

//JSON de solo iconos para el usuario normal
const jsonDataIcons_EstudianteUser = [
  {
    title: "Inicio",
    icon: "bi bi-house",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Juegos",
    icon: "bi bi-controller",
    path: ROUTES.JUEGOS.J1,
  },
  {
    title: "Acerca de",
    icon: "bi bi-info-circle",
    path: ROUTES.ACERCADE,
  },
];

// //JSON de solo iconos para el usuario normal
const jsonDataIcons_ProfesorUser = [
    {
      title: "Inicio",
      icon: "bi-house",
      path: ROUTES.PRINCIPAL,
    },
    {
      title: "Configuración Juegos",
      icon: "bi bi-controller",
      path: ROUTES.PRINCIPAL,
    },
    {
      title: "Configuración Estudiantes",
      icon: "bi bi-people",
      path: ROUTES.PRINCIPAL,
    },
    {
      title: "Reportes",
      icon: "bi bi-clipboard2-data",
      path: ROUTES.PRINCIPAL,
    },
    {
      title: "Acerca de",
      icon: "bi bi-info-circle",
      path: ROUTES.ACERCADE,
    },
  ];

export function jsonData(icons) {
  // Lógica para determinar qué JSON mostrar al usuario dependiendo si es administrador o no
  // const isAdmin = JSON.parse(localStorage.getItem("modulos"));
  // const data = isAdmin.data;
  // const existeModuloADMIN = data.some(
  //   (item) => item.MODULO == NombreAdministracion
  // );
  const tipoUsu = localStorage.getItem("tipo");

  let jsonData;

  if (icons) {
    // Por defecto, exportar JSON de usuario normal
    // Si el usuario es administrador, exportar JSON de administrador
    jsonData = tipoUsu === "PR" ? jsonData_ProfesorUser : jsonData_EstudianteUser;
    // jsonData = jsonData_NormalUser;
  } else {
    // Por defecto, exportar JSON de usuario normal
    // Si el usuario es administrador, exportar JSON de administrador
    jsonData = tipoUsu === "PR"
      ? jsonDataIcons_ProfesorUser
      : jsonDataIcons_EstudianteUser;
    // jsonData = jsonDataIcons_NormalUser;
  }

  return jsonData;
}
