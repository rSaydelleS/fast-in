const Item_Card = () => {
  return (
    <>
      <main>
        <section className="w-96 h-96 bg-white rounded-xl font-bold flex justify-center items-center ">
          <h1>Imagem</h1>
        </section>
        <section className="text-xl py-3">
          <p>Descrição do produto</p>
        </section>
        <section className="flex flex-row justify-between font-bold">
          <section>
            <h3>R$: Preço</h3>
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
