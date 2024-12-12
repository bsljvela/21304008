import { CommonLayout } from "../layouts";
import { Login } from "../pages/common/Login";
import { Register } from "../pages/common/Register";
import { Error404 } from "../pages/common/Error404";

const routesCommon = [
  {
    path: "/login",
    layout: CommonLayout,
    component: Login,
  },
  {
    path: "/register",
    layout: CommonLayout,
    component: Register,
  },
  {
    path: "*",
    layout: CommonLayout,
    component: Error404,
  },
];

export default routesCommon;
