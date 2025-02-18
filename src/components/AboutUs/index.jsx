import PropTypes from "prop-types";
import PatternButton from "../PatternButton";
import "./style.css";

const AboutUs = ({ footerRef }) => {
  const handleScrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="containerAbout">
      <h1 className="titleAbout">Sobre Nós</h1>
      <p className="textAbout">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        consequatur maxime ratione. Ab magni consequatur ipsum, mollitia
        provident perferendis impedit laudantium sit atque voluptas eius
        deleniti quod distinctio labore excepturi sequi minus corrupti,
        aspernatur quis temporibus facilis illum modi accusamus. Para nos
        procurar, basta clicar no botão abaixo
      </p>
      <PatternButton onClick={handleScrollToFooter}>Clique Aqui</PatternButton>
    </div>
  );
};

AboutUs.propTypes = {
  footerRef: PropTypes.object.isRequired,
};

export default AboutUs;
