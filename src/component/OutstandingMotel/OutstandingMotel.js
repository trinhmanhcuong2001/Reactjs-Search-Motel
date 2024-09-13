import classNames from "classnames/bind";
import styles from "./OutstandingMotel.module.scss";
import MotelItem from "../MotelItem";
import { propertyImage } from "../../assets/images";
import { useRef, useState, useEffect } from "react";

const cx = classNames.bind(styles);

const data = [
    {
        image: propertyImage.img_1,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        image: propertyImage.img_2,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        image: propertyImage.img_3,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        image: propertyImage.img_4,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        image: propertyImage.img_5,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
];

function OutstandingMotel() {
    const contentRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            const width = contentRef.current.offsetWidth;
            setContentWidth(width);
        }
    }, [contentRef]);

    const scrollContent = () => {
        const scrollDistance = contentWidth / data.length;
        console.log(scrollDistance);

        if (contentRef.current && !isScrolling) {
            setIsScrolling(true);
            contentRef.current.scrollBy({
                left: scrollDistance,
                behavior: "smooth",
            });
            setTimeout(() => setIsScrolling(false), 500);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <h2 className={cx("title")}>Căn hộ nổi bật</h2>
                <button className={cx("heading-btn")}>Xem Tất Cả</button>
            </div>
            <div className={cx("content")} ref={contentRef}>
                {data.map((data, index) => (
                    <MotelItem data={data} key={index} />
                ))}
            </div>
            <div className={cx("action-btn")}>
                <button onClick={scrollContent}>Prev</button>
                <button onClick={scrollContent}>Next</button>
            </div>
        </div>
    );
}

export default OutstandingMotel;
