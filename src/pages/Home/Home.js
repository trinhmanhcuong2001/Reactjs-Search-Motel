import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx("container")}>
            <section className={cx("search")}>
                <div className={cx("search-content")}>
                    <h2 className={cx("search-heading")}>
                        Tìm Trung Cư, Căn Hộ Với Một Cú Click Chuột
                    </h2>
                    <div className={cx("form-input")}>
                        <input type="text" />
                        <button>Search</button>
                    </div>
                </div>
            </section>
            <section className={cx("outstanding-motel")}>
                <h1>Alo Alo</h1>
            </section>
        </div>
    );
}

export default Home;
