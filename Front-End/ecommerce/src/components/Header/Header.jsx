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
      description: "centra de suporte",
    },
  ]);

  return (
    <>
      <header>
        <main>
          <div className="w-[150px] h-[150px]">
            <img src="../../../public/fast-in-logo.png" alt="Logo" />
          </div>
          <section>
            <ul>
              {about.map((item) => {
                return <li key={item.id}>{item.description}</li>;
              })}
            </ul>
          </section>
          <section>
            <p>usuário</p>
          </section>
        </main>
      </header>
    </>
  );
};

export default Header;
