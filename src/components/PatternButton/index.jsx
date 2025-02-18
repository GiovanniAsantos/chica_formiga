import PropTypes from "prop-types";
import "./style.css";

const PatternButton = ({ children, onClick }) => {
  return (
    <button className="patternButton" onClick={onClick}>
      {children}
    </button>
  );
};

PatternButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Adicionando a tipagem
};

export default PatternButton;
