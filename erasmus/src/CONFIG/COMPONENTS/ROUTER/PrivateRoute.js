import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "CONFIG/context/authcontext";
import { ROUTES } from "CONFIG/ROUTES/paths";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();
  const tipoUsu = localStorage.getItem("tipo");

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGINREGISTRO} />;
  }
  let indexPage;
  if (tipoUsu === "ADM") {
    indexPage = ROUTES.ADMINISTRADOR;
  } else {
    indexPage = ROUTES.PRINCIPAL;
  }

  return (
    <div>
      <Navigate style={{ display: "none" }} to={indexPage}  />
      <Outlet />
    </div>
  );
}
