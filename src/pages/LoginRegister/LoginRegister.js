import classNames from "classnames/bind";
import styles from "./LoginRegister.module.scss";

import { useState } from "react";

const cx = classNames.bind(styles);

function LoginRegister() {
    const [showRight, setShowRight] = useState(false);
    return (
        <div className={cx("wrapper")}>
            <div
                className={cx("container", {
                    "show-right": showRight,
                })}
            >
                <div className={cx("signup-container")}>
                    <h1 className={cx("title-form")}>Tạo tài khoản</h1>
                    <span>Sử dụng email của bạn để đăng ký</span>
                    <input
                        type="text"
                        placeholder="Tên"
                        className={cx("input-form")}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className={cx("input-form")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={cx("input-form")}
                    />
                    <button className={cx("btn-form")}>Đăng ký</button>
                </div>
                <div className={cx("signin-container")}>
                    <h1 className={cx("title-form")}>Đăng nhập</h1>
                    <input
                        type="text"
                        placeholder="Email"
                        className={cx("input-form")}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className={cx("input-form")}
                    />
                    <span>Quên mật khẩu</span>
                    <button className={cx("btn-form")}>Đăng nhập</button>
                </div>
                <div className={cx("overlay-container")}>
                    <div className={cx("overlay")}>
                        <div className={cx("overlay-left")}>
                            <h1>Chào mừng trở lại</h1>
                            <p>
                                Để giữ kết nối với chúng tôi, vui lòng đăng nhập
                                bằng thông tin cá nhân của bạn
                            </p>
                            <button
                                onClick={() => setShowRight(false)}
                                className={cx("btn-form", "ghost")}
                            >
                                Đăng nhập
                            </button>
                        </div>
                        <div className={cx("overlay-right")}>
                            <h1>Xin chào bạn!</h1>
                            <p>
                                Nhập thông tin cá nhân của bạn và bắt đầu hành
                                trình với chúng tôi
                            </p>
                            <button
                                onClick={() => setShowRight(true)}
                                className={cx("btn-form", "ghost")}
                            >
                                Tạo Tài khoản
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
