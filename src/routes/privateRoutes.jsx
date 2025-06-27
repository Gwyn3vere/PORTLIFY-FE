import MainLayout from "../components/layout/Main";

import { Create } from "../pages/Portfolio";

const privateRoutes = [
  {
    path: "/create",
    component: Create,
    layout: MainLayout,
    role: ["admin", "user"]
  }
];

export default privateRoutes;
