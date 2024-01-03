
import { ROUTES } from "CONFIG/ROUTES/paths";
import { useAuthContext } from "CONFIG/context/authcontext";

//JSON con para el usuario normal
const jsonData_NormalUser = [
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
  
];

// //JSON para un usuario administrador
// const jsonData_AdminUser = [
//   ...jsonData_NormalUser,
//   {
//     title: "Administración",
//     icon: "bi-person-badge",
//     modulo: "ADMINISTRACION",
//     path: ROUTES.ADMINISTRACION_USUARIOS,
//   },
// ];

//JSON de solo iconos para el usuario normal
const jsonDataIcons_NormalUser = [
  {
    title: "Inicio",
    icon: "bi bi-house",
    path: ROUTES.PRINCIPAL,
  },
  {
    title: "Juegos",
    icon: "bi bi-controller",
    path: ROUTES.JUEGOS.J1,
  }
];

// //JSON de solo iconos para el usuario normal
// const jsonDataIcons_AdminUser = [
//   ...jsonDataIcons_NormalUser,
//   {
//     title: "Administración",
//     icon: "bi-person-badge",
//     modulo: "ADMINISTRACION",
//     path: ROUTES.ADMINISTRACION_USUARIOS,
//   },
// ];

export function jsonData(icons) {
  // Lógica para determinar qué JSON mostrar al usuario dependiendo si es administrador o no
  // const isAdmin = JSON.parse(localStorage.getItem("modulos"));
  // const data = isAdmin.data;
  // const existeModuloADMIN = data.some(
  //   (item) => item.MODULO == NombreAdministracion
  // );

  let jsonData;

  if (icons) {
    // Por defecto, exportar JSON de usuario normal
    // Si el usuario es administrador, exportar JSON de administrador
    // jsonData = existeModuloADMIN ? jsonData_AdminUser : jsonData_NormalUser;
    jsonData = jsonData_NormalUser;
  } else {
    // Por defecto, exportar JSON de usuario normal
    // Si el usuario es administrador, exportar JSON de administrador
    // jsonData = existeModuloADMIN
    //   ? jsonDataIcons_AdminUser
    //   : jsonDataIcons_NormalUser;
    jsonData = jsonDataIcons_NormalUser;
  }

  return jsonData;
}
