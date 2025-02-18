import PropTypes from "prop-types";
import "./style.css";

const HeaderNavbar = ({ heroRef, aboutUsRef, productsRef, clientsRef }) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <span className="navItem" onClick={() => handleScroll(heroRef)}>Home</span>
      <span className="navItem" onClick={() => handleScroll(aboutUsRef)}>Sobre</span>
      <span className="navItem" onClick={() => handleScroll(clientsRef)}>Clientes</span>
      <span className="navItem" onClick={() => handleScroll(productsRef)}>Produtos</span>
    </div>
  );
};

HeaderNavbar.propTypes = {
  heroRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  productsRef: PropTypes.object.isRequired,
  clientsRef: PropTypes.object.isRequired,
};

export default HeaderNavbar;
