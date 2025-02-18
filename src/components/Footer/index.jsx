import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p style={{ textAlign: "center" }}>
          Endereço: 
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Caio+Cid+477" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Rua Caio Cid 477
          </a>
        </p>
        <p style={{ textAlign: "center" }}>Telefone: +55 85 99252-8922</p>
        <p style={{ textAlign: "center" }}>© 2025 Chica Formiga. Todos os direitos reservados.</p>
        <p style={{ textAlign: "center" }}>Desenvolvido por Giovanni Azevedo</p>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/GiovanniAsantos/chica-formiga.git" target="_blank" rel="noopener noreferrer">
            Acesse o repositório no GitHub
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;