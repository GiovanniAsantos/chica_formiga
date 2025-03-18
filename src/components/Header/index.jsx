import PropTypes from "prop-types";
import ContactButtons from "../ContactButtons";
import HeaderNavbar from "../HeaderNavbar";
const Header = ({ heroRef, aboutUsRef, productsRef, clientsRef }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          position: "relative",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ alignSelf: "center" }}>
            <img
              style={{ height: "12rem", width: "12rem" }}
              src="/chicaLogo-removebg.png"
              alt="Logo"
            />
          </div>
          <HeaderNavbar
            heroRef={heroRef}
            aboutUsRef={aboutUsRef}
            productsRef={productsRef}
            clientsRef={clientsRef}
          />
        </div>

        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ContactButtons />
        </div>
      </div>
    </>
  );
};

// ✅ Adicionando PropTypes para validar as props
Header.propTypes = {
  heroRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  productsRef: PropTypes.object.isRequired,
  clientsRef: PropTypes.object.isRequired,
};

export default Header;
