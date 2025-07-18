import { MainLayout, AuthLayout } from "../components/layout";

import Home from "../pages/Home/Home";

//Portfolio
import { List } from "../pages/Portfolio";
import { Login } from "../pages/Auth";

const publicRoutes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/list", component: List, layout: MainLayout },
  { path: "/login", component: Login, layout: AuthLayout }
];

export default publicRoutes;
