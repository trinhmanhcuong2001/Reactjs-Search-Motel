import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("box-item")}>
                    <h3 className={cx("title")}>Trụ sở chính</h3>
                    <p className={cx("address")}>
                        Mạnh Tân, Thụy Lâm, Đông Anh, Hà Nội
                    </p>
                    <ul>
                        <li>
                            <a href="tel://0961551260">0961551260</a>
                        </li>
                        <li>
                            <a href="tel://0961551260">0961551260</a>
                        </li>
                        <li>
                            <a href="mailto:cuong69pro@gmail.com">
                                cuong69pro@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx("box-item")}>
                    <h3 className={cx("title")}>Liên hệ</h3>
                    <ul>
                        <li>
                            <a href="/">Liên hệ</a>
                        </li>
                        <li>
                            <a href="/">Thông báo</a>
                        </li>
                        <li>
                            <a href="/">Câu hỏi thường gặp</a>
                        </li>
                        <li>
                            <a href="/">Báo giá hỗ trợ</a>
                        </li>
                        <li>
                            <a href="/">Facebook</a>
                        </li>
                        <li>
                            <a href="/">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div className={cx("box-item")}>
                    <h3 className={cx("title")}>Links</h3>
                    <ul>
                        <li>
                            <a href="/">Trang chủ</a>
                        </li>
                        <li>
                            <a href="/">Liên hệ</a>
                        </li>
                        <li>
                            <a href="/">Giới thiệu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
