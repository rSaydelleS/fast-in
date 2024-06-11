import Item_Card from "../../components/Card/Item_Card";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <main className="w-screen h-screen bg-neutral-100 flex flex-col justify-between items-center text-justify ">
        <header className="bg-white w-full">
          <section>
            <Header />
          </section>
        </header>
        <section>
          <Item_Card />
        </section>
        <section className="bg-slate-600 text-white w-full p-4">
          <footer>
            <h1>E commerce ficticio</h1>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Home;
