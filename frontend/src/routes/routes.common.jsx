import { CommonLayout } from "../layouts";
<<<<<<< HEAD
import { Login } from "../pages/common";
import { Register } from "../pages/common";
import { Error404 } from "../pages/common";
=======
import { Login } from "../pages/common/Login";
import { Register } from "../pages/common/Register";
import { Error404 } from "../pages/common/Error404";
>>>>>>> 03c6c8c0e73a1c9edd01d6e6b74e927c7fbcf9da

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
