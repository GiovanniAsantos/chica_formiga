import PatternButton from "../PatternButton";

const Hero = () => {
  return (
    <div
      style={{
        marginTop: "5vh",
        background:
          "url('https://www.transparenttextures.com/patterns/old-paper-4.png'), #FAF1E6", // Cor bege claro e textura de papel
        width: "100%",
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
          padding: "30px",
        }}
      >
        <h1
          style={{
            color: "#5A3D3D",
            zIndex: 1,
            position: "relative",
            fontFamily: "Dancing Script, sans-serif",
          }}
        >
          Seja Bem-vindo ao nosso Site
        </h1>
        <p style={{ color: "#5A3D3D" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit
          eu arcu finibus vulputate. Sed vel nunc a enim euismod elementum.
          Nulla facilisi. Vestibulum dapibus consectetur velit, ut consectetur
          arcu convallis vel. Aliquam erat volutpat. Sed non dui vel ex
          consectetur dictum. Donec sed vestibulum felis, ut tincidunt est.
          Quisque at velit at justo commodo malesuada. Sed convallis faucibus
          est, vel pellentesque neque semper non. Curabitur non enim ac neque
          congue faucibus. Donec sed arcu et neque pulvinar mollis.
        </p>
      </div>
    </div>
  );
};

export default Hero;
