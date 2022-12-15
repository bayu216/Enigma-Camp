import { Navigate, Outlet } from "react-router-dom";

export function RouteGuard() {
  console.log("isLogin", sessionStorage.getItem("isLogin"));
  if (sessionStorage.getItem("isLogin") === "0") {
    return <Navigate to="login" />;
  }

  return <Outlet />;
}
