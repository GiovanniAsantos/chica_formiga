import "./style.css";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "",
      title: "Bolos Confeitados",
      text: "Melhor confeitaria! Atendimento maravilhoso e doces incríveis!",
    },
    {
      id: 2,
      image: "",
      title: "Doces personalizados",
      text: "Simplesmente apaixonada pelos bolos! Qualidade impecável!",
    },
    {
      id: 3,
      image: "",
      title: "Tortas",
      text: "Sempre faço encomendas aqui! Recomendo a todos!",
    },
    {
      id: 4,
      image: "",
      title: "Bownies",
      text: "Sempre faço encomendas aqui! Recomendo a todos!",
    },
  ];
  return (
    <>
      <div className="productsContainer">
        <h1 className="productsTItle">Nossos Produtos</h1>
        <div className="productsCardContainer">
          {products.map((product) => (
            <div className="divCard" key={product.id}>
              <h2>{product.title}</h2>
              <div className="productsCard">
                <div className="imgContainer">
                  <img
                    className="imgCard"
                    src={product.image}
                    alt={`Produto ${product.id}`}
                  />
                </div>
                <div className="divTextCard">{product.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
