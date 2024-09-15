import { memo } from "react";

import classNames from "classnames/bind";
import styles from "./NewCommentItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function NewCommentItem({ data }) {
    return (
        <div className={cx("wrapper")}>
            <img className={cx("avatar")} src={data.img} alt="test" />
            <div className={cx("rate")}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <h3 className={cx("name")}>{data.name}</h3>
            <p className={cx("content")}>{data.content}</p>
            <p className={cx("time")}>{data.time}</p>
        </div>
    );
}

export default memo(NewCommentItem);
