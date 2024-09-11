import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

function Header() {
    return (
        <nav className={cx("wrapper")}>
            <div className={cx("container")}>
                <Link className={cx("logo")} to={config.routes.home}>
                    DDC
                </Link>
                <div className={cx("list-menu")}>
                    <NavLink
                        className={cx("list-item")}
                        to={config.routes.home}
                    >
                        Trang chủ
                    </NavLink>
                    <NavLink className={cx("list-item")} to="/not-route">
                        Thuê Phòng Trọ
                    </NavLink>
                    <NavLink className={cx("list-item")} to="/not-route">
                        Thuê Căn Hộ
                    </NavLink>
                    <NavLink className={cx("list-item")} to="/not-route">
                        Giới thiệu
                    </NavLink>
                    <NavLink className={cx("list-item")} to="/not-route">
                        Liên hệ
                    </NavLink>
                    <NavLink className={cx("list-item")} to="/not-route">
                        Đăng nhập
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Header;
