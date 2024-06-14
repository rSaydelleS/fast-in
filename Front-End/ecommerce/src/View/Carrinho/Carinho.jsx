import CarrinhoItem from "../../components/Carrinho_Item/Carrinho_Item";

const Carrinho = () => {
  return (
    <>
      <main>
        <section className="flex flex-col justify-start items-start my-8 mx-10">
          <h1 className="font-bold text-3xl">Seus pedidos</h1>
          <section className="flex flex-col text-justify bg-white shadow-lg shadow-slate-500 rounded-md text-2xl">
            <CarrinhoItem />
          </section>
        </section>
      </main>
    </>
  );
};

export default Carrinho;
