import config from "../config";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import Properties from "../pages/Properties/Properties";

export const publicRoutes = [
    { path: config.routes.home, component: Home, layout: UserLayout },
    {
        path: config.routes.properties,
        component: Properties,
        layout: UserLayout,
    },
];
