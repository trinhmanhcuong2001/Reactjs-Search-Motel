import classNames from "classnames/bind";
import styles from "./PropertyDetail.module.scss";
import { backgroundSearchImages, newCommentImage } from "../../assets/images";
import { useEffect, useRef } from "react";
import Comment from "../../component/Comment/Comment";

const cx = classNames.bind(styles);

const data = {
    name: "Chung cư mini Quang Minh",
    image: backgroundSearchImages.hero_bg_1,
    address: "Ngã 4 Nguyễn Văn Huyên - Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội",
    description: `<p>
    <img src="https://static.chotot.com/storage/icons/logos/ad-param/size.png" alt="Diện tích đất" width="20" height="20">
    </p>
    <p>Diện tích đất: 37 m²</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/price_m2.png" alt="Giá/m2" width="20" height="20"></p>
    <p>Giá/m2: 160,81 triệu/m²</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/rooms.png" alt="Số phòng ngủ" width="20" height="20"></p>
    <p>Số phòng ngủ: 3 phòng</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/toilets.png" alt="Số phòng vệ sinh" width="20" height="20"></p>
    <p>Số phòng vệ sinh: 4 phòng</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/floors.png" alt="Tổng số tầng" width="20" height="20"></p>
    <p>Tổng số tầng: 5</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/property_legal_document.png" alt="Giấy tờ pháp lý" width="20" height="20"></p><p>Giấy tờ pháp lý: Đã có sổ</p>
    <p><img src="https://static.chotot.com/storage/icons/logos/ad-param/house_type.png" alt="Loại hình nhà ở" width="20" height="20"></p>
    <p>Loại hình nhà ở: Nhà ngõ, hẻm</p><p><img src="https://static.chotot.com/storage/icons/logos/ad-param/furnishing_sell.png" alt="Tình trạng nội thất" width="20" height="20"></p><p>Tình trạng nội thất: Nội thất đầy đủ</p><p><img src="https://static.chotot.com/storage/icons/logos/ad-param/living_size.png" alt="Diện tích sử dụng" width="20" height="20"></p>
    <p>Diện tích sử dụng: 37 m²</p><p>BÁN NHÀ NGUYỄN VĂN LỘC - TRUNG TÂM HÀ ĐÔNG - KHU VỰC HIẾM NHÀ BÁN - TIỆN ÍCH KHU - PHỐ VIP HÀ ĐÔNG</p>
    <p>&nbsp;-Bán nhà Nguyễn Văn Lộc 38m2, 5 tầng, Giá chào 5,95 tỷ có thương lượng - Vị trí trung tâm Hà Đông xung quanh là các Khu đô thị Mỗ Lao, Làng Việt Kiều châu Âu, Khu đô thị Văn Quán, hưởng trọn tiện ích..&nbsp;</p>
    <p>- Ngõ Nguyễn Văn Lộc Ô tô tránh thông sang Phố Ao Sen sầm uất, kinh doanh tập nập, nhà cách oto dừng đỗ 15m. Giao thông thuận tiện kết nối các khu vực.&nbsp;</p><p>Thiết kế: 5 tầng, 3 ngủ(có thể thêm thành 4 ngủ), 5 vệ sinh&nbsp;</p><p>+ Tầng 1: Phòng khách , bếp, sân để xe, vệ sinh.&nbsp;</p>
    <p>+ Tầng 2-3-4 : mỗi tầng 1 PN + vệ sinh khép kín, thoáng, ban công&nbsp;</p><p>+ Tầng 5: phòng thờ, tum, sân phơi - Sổ đỏ chính chủ chờ giao dịch. Liên hệ em để xem nhà trực tiếp ***</p>`,
    user: {
        name: "Chủ nhà A",
        phone: "0975746351",
        image: newCommentImage.person_1,
    },
};

function PropertyDetail() {
    const backgroundHeading = useRef(null);

    useEffect(() => {
        if (backgroundHeading) {
            backgroundHeading.current.style.backgroundImage =
                "url(" + data.image + ")";
        }
    }, []);
    return (
        <div className={cx("wrapper")}>
            <section
                className={cx("background-heading")}
                ref={backgroundHeading}
            >
                <h1 className={cx("heading-title")}>{data.name}</h1>
            </section>
            <section className={cx("container")}>
                <div className={cx("property-image")}>
                    <img
                        className={cx("img")}
                        src={data.image}
                        alt={data.name}
                    />
                </div>
                <div className={cx("property-info")}>
                    <h1 className={cx("property-name")}>{data.name}</h1>
                    <p className={cx("property-address")}>{data.address}</p>
                    <div
                        className={cx("property-description")}
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </div>
                <div className={cx("master-info")}>
                    <img
                        className={cx("image-master")}
                        src={data.user.image}
                        alt={data.user.name}
                    />
                    <div className={cx("text-info")}>
                        <h4 className={cx("master-name")}>{data.user.name}</h4>
                        <p>Chủ Phòng</p>
                        <p className={cx("master-phone")}>{data.user.phone}</p>
                    </div>
                </div>
                <div className={cx("comment")}>
                    <Comment />
                </div>
            </section>
        </div>
    );
}

export default PropertyDetail;
