import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <main className="flex justify-center items-center w-screen h-screen bg-neutral-100">
        <section className="flex flex-col gap-28 text-justify bg-white shadow-lg shadow-slate-500 rounded-md p-10 text-2xl max-sm:w-80 max-sm:mt-10 max-sm:mb-10">
          <p className="w-96 max-sm:w-full">
            Bem-vindo ao Fast-in, onde a sua satisfação é a nossa prioridade.
            Fundada com a missão de revolucionar a experiência de compras
            online, nossa empresa se dedica a entregar suas encomendas da forma
            mais rápida e segura possível.
          </p>
          <p className="w-96 max-sm:w-full">
            Querendo vender um produto? Cadastre ele agora mesmo{" "}
            <Link to={"/home/cadastrar"}>
              <span className="text-red-500 italic hover:text-black hover:border-b-2 hover:border-black transition-all ease-in-out duration-200">
                AQUI
              </span>
            </Link>{" "}
            e apenas espere nós fazermos nossa mágica
          </p>
        </section>
      </main>
    </>
  );
};

export default Sobre;
