import config from "../config";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/Home";
import LoginRegister from "../pages/LoginRegister/LoginRegister";
import Properties from "../pages/Properties/Properties";
import PropertyDetail from "../pages/PropertyDetail/PropertyDetail";

export const publicRoutes = [
    { path: config.routes.home, component: Home, layout: UserLayout },
    {
        path: config.routes.properties,
        component: Properties,
        layout: UserLayout,
    },
    {
        path: config.routes.propertyDetail,
        component: PropertyDetail,
        layout: UserLayout,
    },
    { path: config.routes.loginRegister, component: LoginRegister },
];
