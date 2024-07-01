import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [about] = useState([
    {
      id: 1,
      description: "Cadastrar produto",
      link: "/home/cadastrar",
    },
    {
      id: 2,
      description: "Sobre nós",
      link: "/home/sobre",
    },
    {
      id: 3,
      description: "Centra de suporte",
      link: "/home/ajuda",
    },
    {
      id: 4,
      description: "Carrinho de compras",
      link: "/home/carrinho",
    },
  ]);

  return (
    <>
      <header>
        <main className="max-sm:flex max-sm:flex-col max-sm:justify-start max-sm:items-start flex flex-grow items-center justify-around">
          <div className="max-sm:w-[100px] max-sm:h-[100px] w-[150px] h-[150px]">
            <Link to={"/home"}>
              <img
                src="../../../public/fast-in-logo.png"
                alt="Logo"
                className="cursor-pointer"
              />
            </Link>
          </div>
          <section className="w-full">
            <ul className="flex flex-row gap-8 font-bold text-xl max-sm:text-base max-sm:gap-2">
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
