import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import config from "../../../../config";

const cx = classNames.bind(styles);

function Header() {
    return (
        <nav className={cx("wrapper")}>
            <div className={cx("container")}>
                <Link className={cx("logo")} to={config.routes.home}>
                    DDC
                </Link>
                <ul className={cx("list-menu")}>
                    <li className={cx("list-item")}>Trang chủ</li>
                    <li className={cx("list-item")}>Thuê Phòng Trọ</li>
                    <li className={cx("list-item")}>Thuê Căn Hộ</li>
                    <li className={cx("list-item")}>Giới thiệu</li>
                    <li className={cx("list-item")}>Liên hệ</li>
                    <li className={cx("list-item")}>Đăng nhập</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
