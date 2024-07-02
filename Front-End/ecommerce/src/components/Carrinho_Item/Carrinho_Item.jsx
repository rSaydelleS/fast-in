const CarrinhoItem = () => {
  return (
    <>
      <main className="flex flex-row justify-around items-center max-sm:flex-col max-sm:justify-start max-sm:items-start max-sm:gap-10 max-sm:p-6">
        <section className="flex flex-row gap-4">
          <div className="flex justify-center items-center w-16 h-16 bg-black font-bold text-white">
            img
          </div>
          <div>
            <p>Descição do item</p>
          </div>
        </section>
        <section>
          <div>Frete</div>
        </section>
        <section>
          <div>Forma de pagamento</div>
          <div>R$valor</div>
          <div className="flex justify-around">
            <button>Finalizar</button>
            <button>Cancelar</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarrinhoItem;
