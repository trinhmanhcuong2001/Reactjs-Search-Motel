import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { backgroundSearchImages } from "../../assets/images";
import OutstandingMotel from "../../component/OutstandingMotel";

const cx = classNames.bind(styles);

const images = [
    backgroundSearchImages.hero_bg_1,
    backgroundSearchImages.hero_bg_2,
    backgroundSearchImages.hero_bg_3,
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const loadImages = images.map((src) => {
            const img = new Image();
            img.src = src;
            return img;
        });

        Promise.all(
            loadImages.map(
                (img) =>
                    new Promise((resolve) => {
                        img.onload = resolve;
                    })
            )
        ).then(() => {
            setLoadedImages(images);
        });
    }, []);

    useEffect(() => {
        if (loadedImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [loadedImages]);

    return (
        <div className={cx("container")}>
            <section
                className={cx("search")}
                style={{
                    backgroundImage: `url(${loadedImages[currentImageIndex]})`,
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
                <OutstandingMotel />
            </section>
        </div>
    );
}

export default Home;
