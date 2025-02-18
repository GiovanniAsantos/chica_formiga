import img1 from "../../assets/client1.jpg";
import img2 from "../../assets/client2.jpg";
import img3 from "../../assets/client3.jpg";
import "./style.css";

const Clients = () => {
  const clients = [
    {
      id: 1,
      image: img1,
      name: "Isabella S.",
      text: "Melhor confeitaria! Atendimento maravilhoso e doces incríveis!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      image: img2,
      name: "Fernanda M.",
      text: "Simplesmente apaixonada pelos bolos! Qualidade impecável!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      image: img3,
      name: "Vicente P.",
      text: "Sempre faço encomendas aqui! Recomendo a todos!",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="clientsContainer">
      <h1 className="titleClients">Nossos Clientes</h1>
      <div className="cardsDiv">
        {clients.map((client) => (
          <div key={client.id} className="card">
            <div className="imgContainer">
              <img
                className="imgCard"
                src={client.image}
                alt={`Cliente ${client.id}`}
              />
            </div>
            <div className="divNameCard">{client.name}</div>
            <div className="divTextCard">{client.text}</div>
            <div className="divStarsCard">{client.stars}</div>
          </div>
        ))}
      </div>
      <p>
        Sempre visamos em atender cada cliente com amor e respeito, entregando
        um lindo trabalho!
      </p>
    </div>
  );
};

export default Clients;
