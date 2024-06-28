/* eslint-disable react/prop-types */
const Item_Card = ({ dados }) => {
  return (
    <>
      <main>
        <section className="w-96 h-96 bg-white rounded-xl font-bold flex justify-center items-center ">
          <img src={dados.imgProduto} alt="Imagem do produto" srcSet="" />
        </section>
        <section className="text-xl py-3">
          <p>{dados.nomeProduto}</p>
        </section>
        <section className="flex flex-row justify-between font-bold">
          <section>
            <h3>R$: {dados.precoProduto}</h3>
          </section>
          <section>
            <button className="bg-sky-300 py-2 px-2 hover:rounded-lg hover:bg-sky-500 transition-all duration-500">
              Adicionar ao carrinho {">"}
            </button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Item_Card;
