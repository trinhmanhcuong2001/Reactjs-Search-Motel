import classNames from "classnames/bind";
import styles from "./ScrollSlide.module.scss";
import { useRef, useState, useEffect } from "react";
import { memo } from "react";

const cx = classNames.bind(styles);

function ScrollSlide({
    Item,
    className,
    title,
    data,
    titleCenter,
    btnHeading,
}) {
    const contentRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [indexCurrent, setIndexCurrent] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        if (contentRef.current) {
            const width = contentRef.current.offsetWidth;

            setContentWidth(width);
        }
    }, [contentRef]);
    const scrollContent = (direction) => {
        const scrollDistance = (contentWidth + 30) / data.length;

        if (contentRef.current && !isScrolling) {
            setIsScrolling(true);
            if (direction === "prev") {
                setIndexCurrent((prevIndex) => {
                    // Nếu prev và indexCurrent < 0 thì chuyển về data.length - 3
                    let newIndex = prevIndex - 1;
                    if (newIndex < 0) {
                        newIndex = data.length - 3;
                    }
                    contentRef.current.style.transform = `translateX(-${
                        newIndex * scrollDistance
                    }px)`;
                    return newIndex;
                });
            }
            if (direction === "next") {
                setIndexCurrent((prevIndex) => {
                    // Nếu next và indexCurrent > data.length - 3 thì chuyển về 0
                    let newIndex = prevIndex + 1;
                    if (newIndex > data.length - 3) {
                        newIndex = 0;
                    }
                    contentRef.current.style.transform = `translateX(-${
                        newIndex * scrollDistance
                    }px)`;
                    return newIndex;
                });
            }

            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <h2
                    className={cx("title", {
                        [titleCenter]: titleCenter,
                    })}
                >
                    {title}
                </h2>
                {btnHeading && (
                    <button className={cx("heading-btn")}>Xem Tất Cả</button>
                )}
            </div>
            <div className={cx("content")} ref={contentRef}>
                {data.map((data, index) => (
                    <Item data={data} key={index} />
                ))}
            </div>
            <div
                className={cx("action-btn", {
                    [className]: className,
                })}
            >
                <button onClick={() => scrollContent("prev")}>Prev</button>
                <button onClick={() => scrollContent("next")}>Next</button>
            </div>
        </div>
    );
}

export default memo(ScrollSlide);
