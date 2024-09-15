import classNames from "classnames/bind";
import styles from "./Properties.module.scss";
import ScrollSlide from "../../component/ScrollSlide";
import { propertyImage } from "../../assets/images";
import MotelItem from "../../component/MotelItem";

const cx = classNames.bind(styles);

const dataMotelItem = [
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

const listMotel = [
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
    {
        image: propertyImage.img_5,
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
    {
        image: propertyImage.img_5,
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

function Properties() {
    return (
        <div className={cx("wrapper")}>
            <section className={cx("background-heading")}>
                <h1 className={cx("heading-title")}>Thuê Phòng Trọ</h1>
            </section>
            <section className={cx("outstanding-motel")}>
                <ScrollSlide
                    Item={MotelItem}
                    data={dataMotelItem}
                    title="Căn hộ nổi bật"
                    titleCenter="center"
                />
            </section>
            <section className={cx("list-motel")}>
                <div className={cx("container")}>
                    <div className={cx("content")}>
                        {listMotel.map((motel, index) => (
                            <MotelItem
                                key={index}
                                data={motel}
                                className={cx("motel-item")}
                            />
                        ))}
                    </div>
                    <div className={cx("paginate")}>
                        <p className={cx("paginate-text")}>
                            Pagination (1 of 10)
                        </p>
                        <ul className={cx("custom-paginate")}>
                            <li>1</li>
                            <li className={cx("active")}>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Properties;
