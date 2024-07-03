import axios from "axios";

/* eslint-disable react/prop-types */
const Item_Card = ({ dados }) => {
  const comprar = () => {
    const id = dados._id;
    axios.put(`http://localhost:8080/home/${id}`);
  };

  return (
    <>
      <main>
        <section className="w-80 h-80 bg-white rounded-xl font-bold flex justify-center items-center max-sm:w-64 max-sm:h-64 max-sm:p-4">
          <img src={dados.imgProduto} alt="Imagem do produto" srcSet="" />
        </section>
        <section className="text-xl py-3">
          <p>{dados.nomeProduto}</p>
        </section>
        <section className="  flex flex-row justify-between font-bold">
          <section>
            <h3>R$: {dados.precoProduto}</h3>
          </section>
          <section>
            <button
              className="bg-sky-300 py-2 px-2 hover:rounded-lg hover:bg-sky-500 transition-all duration-500"
              onClick={() => comprar()}
            >
              Adicionar ao carrinho {">"}
            </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Item_Card;
