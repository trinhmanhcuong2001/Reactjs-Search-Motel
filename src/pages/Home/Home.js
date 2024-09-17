import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import ScrollSlide from "../../component/ScrollSlide";
import MotelItem from "../../component/MotelItem";
import NewCommentItem from "../../component/NewCommentItem/NewCommentItem";
import {
    backgroundSearchImages,
    propertyImage,
    newCommentImage,
} from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

const images = [
    backgroundSearchImages.hero_bg_1,
    backgroundSearchImages.hero_bg_2,
    backgroundSearchImages.hero_bg_3,
];

const dataMotelItem = [
    {
        id: 1,
        image: propertyImage.img_1,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        id: 2,
        image: propertyImage.img_2,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        id: 3,
        image: propertyImage.img_3,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        id: 4,
        image: propertyImage.img_4,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
    {
        id: 5,
        image: propertyImage.img_5,
        price: "$1,121,000",
        address: "5232 California Fake, Ave. 21BC",
        name: "California, USA",
    },
];

const dataNewComment = [
    {
        img: newCommentImage.person_1,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
    {
        img: newCommentImage.person_2,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
    {
        img: newCommentImage.person_3,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
    {
        img: newCommentImage.person_4,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
    {
        img: newCommentImage.person_5,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
    {
        img: newCommentImage.person_6,
        name: "Cameron Webster",
        content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        time: "2015-12-11",
    },
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
                <ScrollSlide
                    Item={MotelItem}
                    title="Căn hộ nổi bật"
                    data={dataMotelItem}
                    btnHeading
                />
            </section>
            <section className={cx("outstanding-comment")}>
                <ScrollSlide
                    Item={NewCommentItem}
                    className={cx("action-btn-custom")}
                    title="Bình luận mới nhất"
                    data={dataNewComment}
                />
            </section>
            <section className={cx("information")}>
                <div className={cx("information-container")}>
                    <div className={cx("information-heading")}>
                        <h2>Hãy Tìm Ngôi Nhà Hoàn Hảo</h2>
                        <p>
                            Không có gì khiến tôi thích thú hơn là về căn hộ của
                            mình, đóng cửa lại và nấu bữa tối nhỏ cho người tôi
                            thương. Căn hộ của tôi thực sự là một thiên đường.
                            Đó là tổ ấm nơi có thể vỗ về và chữa lành mọi tổn
                            thương trong tôi.
                        </p>
                    </div>
                    <div className={cx("information-body")}>
                        <div className={cx("information-body-content")}>
                            <div className={cx("content-item")}>
                                <span className={cx("content-icon")}></span>
                                <div className={cx("content-info")}>
                                    <h3 className={cx("info-heading")}>
                                        2M Căn Hộ
                                    </h3>
                                    <p className={cx("info-text")}>
                                        Doanh nghiệp hàng đầu cung cấp nhà ở tại
                                        Việt Nam
                                    </p>
                                </div>
                            </div>
                            <div className={cx("content-item")}>
                                <span className={cx("content-icon")}>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                                <div className={cx("content-info")}>
                                    <h3 className={cx("info-heading")}>
                                        Doanh Nghiệp Hàng Đầu
                                    </h3>
                                    <p className={cx("info-text")}>
                                        kinh nghiệm trên 10 năm làm việc trong
                                        lĩnh vực có uy tín cao
                                    </p>
                                </div>
                            </div>
                            <div className={cx("content-item")}>
                                <span className={cx("content-icon")}>
                                    <FontAwesomeIcon icon={faShieldHeart} />
                                </span>
                                <div className={cx("content-info")}>
                                    <h3 className={cx("info-heading")}>
                                        Giấy tờ hợp pháp
                                    </h3>
                                    <p className={cx("info-text")}>
                                        Phương châm uy tín là số 1 luôn đầy đủ
                                        hợp đồng pháp lý cho mỗi khách hàng
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={cx("information-body-img")}>
                            <img
                                src={backgroundSearchImages.hero_bg_3}
                                alt="Info"
                            />
                        </div>
                    </div>
                    <div className={cx("view-count")}>
                        <div className={cx("view-item")}>
                            <span className={cx("number")}>100,000</span>
                            <p className={cx("caption")}>
                                Người sử dụng sản phẩm
                            </p>
                        </div>
                        <div className={cx("view-item")}>
                            <span className={cx("number")}>20,000</span>
                            <p className={cx("caption")}>Đối tác</p>
                        </div>
                        <div className={cx("view-item")}>
                            <span className={cx("number")}>20,000,000</span>
                            <p className={cx("caption")}>Sản phẩm</p>
                        </div>
                        <div className={cx("view-item")}>
                            <span className={cx("number")}>10,000</span>
                            <p className={cx("caption")}>Đại lý</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx("section-support")}>
                <h2>Hãy Trở Thành Khách Hàng Của chúng Tôi Ngay Bây Giờ</h2>
                <button>
                    Hãy cho chúng tôi thêm thông tin để có thể Hỗ trợ tìm căn hộ
                    ưng ý nhất
                </button>
            </section>
            <section className={cx("developer-info")}>
                <div className={cx("developer-info-container")}>
                    <div className={cx("developer-info-heading")}>
                        <h2 className={cx("heading-title")}>
                            Người phát triển
                        </h2>
                        <p className={cx("heading-text")}>
                            Với Sứ Mệnh Hỗ Trợ Mọi Người Tìm Được Những Căn Nhà
                            Hoàn Hảo
                        </p>
                    </div>
                    <div className={cx("developer-info-person")}>
                        <div className={cx("developer-person-item")}>
                            <img
                                className={cx("person-img")}
                                src={newCommentImage.person_1}
                                alt="Test"
                            />
                            <div className={cx("person-content")}>
                                <h2 className={cx("person-content-name")}>
                                    Trịnh Mạnh Cường
                                </h2>
                                <span className={cx("person-content-job")}>
                                    Developer
                                </span>
                                <p className={cx("person-content-introduce")}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facere officiis inventore
                                    cumque tenetur laboriosam, minus culpa
                                    doloremque odio, neque molestias?
                                </p>
                                <ul className={cx("social-list")}>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("developer-person-item")}>
                            <img
                                className={cx("person-img")}
                                src={newCommentImage.person_1}
                                alt="Test"
                            />
                            <div className={cx("person-content")}>
                                <h2 className={cx("person-content-name")}>
                                    Mạnh Cường Trịnh
                                </h2>
                                <span className={cx("person-content-job")}>
                                    Developer
                                </span>
                                <p className={cx("person-content-introduce")}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facere officiis inventore
                                    cumque tenetur laboriosam, minus culpa
                                    doloremque odio, neque molestias?
                                </p>
                                <ul className={cx("social-list")}>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx("developer-person-item")}>
                            <img
                                className={cx("person-img")}
                                src={newCommentImage.person_1}
                                alt="Test"
                            />
                            <div className={cx("person-content")}>
                                <h2 className={cx("person-content-name")}>
                                    Cường Trịnh Mạnh
                                </h2>
                                <span className={cx("person-content-job")}>
                                    Developer
                                </span>
                                <p className={cx("person-content-introduce")}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Facere officiis inventore
                                    cumque tenetur laboriosam, minus culpa
                                    doloremque odio, neque molestias?
                                </p>
                                <ul className={cx("social-list")}>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </li>
                                    <li className={cx("social-item")}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
