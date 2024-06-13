import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [about] = useState([
    {
      id: 1,
      description: "Cadastrar produto",
      link: "/cadastrar",
    },
    {
      id: 2,
      description: "Sobre nós",
      link: "/sobre",
    },
    {
      id: 3,
      description: "Centra de suporte",
      link: "/ajuda",
    },
  ]);

  return (
    <>
      <header>
        <main className="flex flex-grow items-center justify-around ">
          <div className="w-[150px] h-[150px]">
            <Link to={"/home"}>
              <img
                src="../../../public/fast-in-logo.png"
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <section>
            <ul className="flex flex-row gap-8 font-bold text-xl">
              {about.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="cursor-pointer hover:border-b-2 hover:border-red-500"
                  >
                    <Link to={item.link}>{item.description}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <p>nome do usuário</p>
          </section>
        </main>
      </header>
    </>
  );
};

export default Header;
