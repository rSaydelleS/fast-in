const CarrinhoItem = () => {
  return (
    <>
      <main>
        <section>
          <div>img</div>
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
          <div>
            <button>Finalizar</button>
            <button>Cancelar</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarrinhoItem;
