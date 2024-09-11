import config from "../config";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";

export const publicRoutes = [
    { path: config.routes.home, component: Home, layout: UserLayout },
];
