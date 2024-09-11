import "./GlobalStyle.module.scss";
import PropTypes from "prop-types";

function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyle;
