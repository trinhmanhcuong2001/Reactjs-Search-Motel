import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { backgroundSearchImages } from "../../assets/images";

const cx = classNames.bind(styles);

const images = [
    backgroundSearchImages.hero_bg_1,
    backgroundSearchImages.hero_bg_2,
    backgroundSearchImages.hero_bg_3,
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={cx("container")}>
            <section
                className={cx("search")}
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                }}
            >
                <div className={cx("search-content")}>
                    <h1 className={cx("search-heading")}>
                        Tìm Trung Cư, Căn Hộ Với Một Cú Click Chuột
                    </h1>
                    <div className={cx("form-input")}>
                        <input
                            type="text"
                            className={cx("search-input")}
                            placeholder="Địa chỉ bạn muốn tìm"
                        />
                        <button className={cx("search-btn")}>Search</button>
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
