import axios from "axios";
import Item_Card from "../../components/Card/Item_Card";
import { useEffect, useState } from "react";

const Home = () => {
  const [dados, setDados] = useState([]);

  const getdados = async () => {
    try {
      let resposta = await axios.get("https://fast-in-iy4x.vercel.app/home");
      setDados(resposta.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdados();
  }, []);
  return (
    <>
      <main className="w-screen h-screen bg-neutral-100 flex flex-col justify-between items-center text-justify">
        <section className="m-12 grid grid-cols-3 grid-rows-subgrid gap-16 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:m-4">
          {dados.map((item) => {
            return <Item_Card key={item._id} dados={item} />;
          })}
        </section>
        <section className="bg-slate-600 text-white w-screen p-4">
          <footer>
            <h1>E commerce ficticio</h1>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;
