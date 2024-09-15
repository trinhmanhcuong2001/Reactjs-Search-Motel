import classNames from "classnames/bind";
import styles from "./UserLayout.module.scss";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const cx = classNames.bind(styles);

function UserLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default UserLayout;
