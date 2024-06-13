import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <main>
        <section>
          <p>
            Bem-vindo ao Fast-in, onde a sua satisfação é a nossa prioridade.
            Fundada com a missão de revolucionar a experiência de compras
            online, nossa empresa se dedica a entregar suas encomendas da forma
            mais rápida e segura possível.
          </p>
          <p>
            Querendo vender um produto? Cadastre ele agora mesmo{" "}
            <Link to={"/cadastrar"}>aqui</Link> e apenas espere nós fazermos
            nossa mágica
          </p>
        </section>
      </main>
    </>
  );
};

export default Sobre;
