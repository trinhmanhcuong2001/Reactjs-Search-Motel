import classNames from "classnames/bind";
import styles from "./MotelItem.module.scss";
import config from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function MotelItem({ data }) {
    return (
        <div className={cx("wrapper")}>
            <Link to={config.routes.home}>
                <img className={cx("img")} src={data.image} alt="test" />
            </Link>
            <div className={cx("content")}>
                <div className={cx("price")}>
                    <span>{data.price}</span>
                </div>
                <p className={cx("address")}>{data.address}</p>
                <h1 className={cx("name")}>{data.name}</h1>
                <div className={cx("icon-box")}>
                    <span className={cx("icon-bed")}>
                        <FontAwesomeIcon icon={faBed} />{" "}
                    </span>
                    <span className={cx("caption")}>2 ngủ</span>
                    <span className={cx("icon-bath")}>
                        <FontAwesomeIcon icon={faBath} />
                    </span>{" "}
                    <span className={cx("caption")}>2 tắm</span>
                </div>
                <button className={cx("btn")}>Xem thêm</button>
            </div>
        </div>
    );
}

export default MotelItem;
