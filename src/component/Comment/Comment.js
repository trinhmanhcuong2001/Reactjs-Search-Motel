import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import { newCommentImage } from "../../assets/images";

const cx = classNames.bind(styles);

function Comment() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("comment-form")}>
                <h3 className={cx("form-title")}>Bình luận về sản phẩm</h3>
                <textarea
                    className={cx("form-input")}
                    rows="6"
                    placeholder="Nhập bình luận của bạn ở đây"
                ></textarea>
                <button className={cx("form-btn")}>Gửi</button>
            </div>
            <div className={cx("list-comment")}>
                <div className={cx("comment-item")}>
                    <div className={cx("comment-img")}>
                        <img src={newCommentImage.person_1} alt="Test" />
                    </div>
                    <div className={cx("outline-comment-content")}>
                        <div className={cx("item-content")}>
                            <h4 className={cx("comment-name")}>Lucio</h4>
                            <p className={cx("content-comment")}>
                                Hay
                                quáegdttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </div>
                        <div className={cx("action-content")}>
                            <button className={cx("btn-action")}>Thích</button>
                            <button className={cx("btn-action")}>
                                Trả lời
                            </button>
                            <p className={cx("time")}>2024/09/12</p>
                        </div>
                    </div>
                </div>
                <div className={cx("comment-item")}>
                    <div className={cx("comment-img")}>
                        <img src={newCommentImage.person_1} alt="Test" />
                    </div>
                    <div className={cx("outline-comment-content")}>
                        <div className={cx("item-content")}>
                            <h4 className={cx("comment-name")}>Lucio</h4>
                            <p className={cx("content-comment")}>
                                Hay
                                quáegdttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </div>
                        <div className={cx("action-content")}>
                            <button className={cx("btn-action")}>Thích</button>
                            <button className={cx("btn-action")}>
                                Trả lời
                            </button>
                            <p className={cx("time")}>2024/09/12</p>
                        </div>
                    </div>
                </div>
                <div className={cx("comment-item")}>
                    <div className={cx("comment-img")}>
                        <img src={newCommentImage.person_1} alt="Test" />
                    </div>
                    <div className={cx("outline-comment-content")}>
                        <div className={cx("item-content")}>
                            <h4 className={cx("comment-name")}>Lucio</h4>
                            <p className={cx("content-comment")}>
                                Hay
                                quáegdttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </p>
                        </div>
                        <div className={cx("action-content")}>
                            <button className={cx("btn-action")}>Thích</button>
                            <button className={cx("btn-action")}>
                                Trả lời
                            </button>
                            <p className={cx("time")}>2024/09/12</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
