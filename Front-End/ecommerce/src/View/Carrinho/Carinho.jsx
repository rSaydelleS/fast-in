import { useEffect, useState } from "react";
import CarrinhoItem from "../../components/Carrinho_Item/Carrinho_Item";
import axios from "axios";

const Carrinho = () => {
  const [compras, setCompras] = useState([]);

  const getdados = async () => {
    try {
      let resposta = await axios.get("http://localhost:8080/home/carrinho");
      setCompras(resposta.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdados();
  }, [compras]);

  return (
    <>
      <main className="bg-neutral-100 w-screen h-screen">
        <section className="flex flex-col justify-start items-start my-8 mx-10">
          <h1 className="font-bold text-3xl">Seus pedidos</h1>
          <section className="flex flex-col text-justify w-full bg-neutral-100 shadow-lg shadow-slate-500 rounded-md text-2xl gap-7">
            {compras.map((item) => {
              return <CarrinhoItem key={item._id} dados={item} />;
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default Carrinho;
