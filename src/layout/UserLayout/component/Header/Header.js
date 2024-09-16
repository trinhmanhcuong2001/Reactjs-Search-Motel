import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

const listRoute = [
    {
        path: config.routes.home,
        title: "Trang chủ",
    },
    {
        path: config.routes.properties,
        title: "Thuê Phòng Trọ",
    },
    {
        path: "/not-route",
        title: "Thuê Căn Hộ",
    },
    {
        path: "/not-route",
        title: "Giới thiệu",
    },
    {
        path: "/not-route",
        title: "Liên hệ",
    },
    {
        path: config.routes.loginRegister,
        title: "Đăng nhập",
    },
];

function Header() {
    return (
        <nav className={cx("wrapper")}>
            <div className={cx("container")}>
                <Link className={cx("logo")} to={config.routes.home}>
                    DDC
                </Link>
                <div className={cx("list-menu")}>
                    {listRoute.map((route, index) => (
                        <NavLink
                            key={index}
                            className={({ isActive }) =>
                                cx("list-item", {
                                    active: isActive,
                                })
                            }
                            to={route.path}
                        >
                            {route.title}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Header;
