import { MainLayout } from "../components/layout";

import Home from "../pages/Home/Home";

//Portfolio
import { List } from "../pages/Portfolio";

const publicRoutes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/list", component: List, layout: MainLayout }
];

export default publicRoutes;
