import classNames from "classnames/bind";
import styles from "./UserLayout.module.scss";
import Header from "./component/Header/Header";

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            {children}
        </div>
    );
}

export default UserLayout;
