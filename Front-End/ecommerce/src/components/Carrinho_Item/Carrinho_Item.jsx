import axios from "axios";

/* eslint-disable react/prop-types */
const CarrinhoItem = ({ dados }) => {
  const remover = () => {
    const id = dados._id;
    axios.put(`https://fast-in-iy4x.vercel.app/home/carrinho/${id}`);
  };

  return (
    <>
      <main className="flex flex-row justify-around items-center max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-10 max-sm:p-6">
        <section className="flex flex-row gap-4">
          <div className="flex justify-center items-center w-16 h-16 bg-black font-bold text-white">
            <img src={dados.imgProduto} alt="iamgem do seu produto" />
          </div>
          <div>
            <p className="w-64">{dados.nomeProduto}</p>
          </div>
        </section>
        <section>
          <div>Frete</div>
        </section>
        <section>
          <div>Forma de pagamento</div>
          <div>R${dados.precoProduto}</div>
          <div className="flex justify-around">
            <button className="text-green-500 font-bold cursor-pointer transition-all duration-500 hover:text-green-400">
              Finalizar
            </button>
            <button
              onClick={() => {
                remover();
              }}
              className="text-red-600 font-semibold cursor-pointer hover:text-red-400"
            >
              Cancelar
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarrinhoItem;
