import { useState } from "react";

const Header = () => {
  const [about] = useState([
    {
      id: 1,
      description: "Cadastrar produto",
    },
    {
      id: 2,
      description: "Sobre nós",
    },
    {
      id: 3,
      description: "Centra de suporte",
    },
  ]);

  return (
    <>
      <header>
        <main className="flex flex-grow items-center justify-around ">
          <div className="w-[150px] h-[150px]">
            <img src="../../../public/fast-in-logo.png" alt="Logo" />
          </div>
          <section>
            <ul className="flex flex-row gap-8 font-bold text-xl">
              {about.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="cursor-pointer hover:border-b-2 hover:border-red-500"
                  >
                    {item.description}
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
