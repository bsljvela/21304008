import { ClientLayout } from "../layouts";
<<<<<<< HEAD
import {Home} from '../pages/client/Home'
=======
import {Home} from "../pages/client/Home";
>>>>>>> 03c6c8c0e73a1c9edd01d6e6b74e927c7fbcf9da

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/home",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;
