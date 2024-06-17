import { useForm } from "react-hook-form";

const Cadastro = () => {
  const { register, handleSubmit } = useForm();

  const cadastrarProduto = (data) => {
    console.log(data);
  };
  return (
    <>
      <main className="flex flex-col justify-center items-center p-4 w-screen h-screen bg-neutral-100">
        <section className=" m-4 p-12 bg-white shadow-xl shadow-black rounded-xl">
          <section>
            <section>
              <h1 className="font-bold text-2xl italic">
                Cadastre seu produto
              </h1>
            </section>
          </section>
          <section>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit((data) => cadastrarProduto(data))}
            >
              <label className="font-bold text-lg after:content-['*'] after:text-red-500">
                Nome do produto:
              </label>
              <input
                {...register("Produto", { required: true })}
                placeholder="Seu produto"
                type="text"
                className="p-2 rounded-xl text-xl"
              />
              <label className="font-bold text-lg after:content-['*'] after:text-red-500">
                Preço:
              </label>
              <input
                {...register("Preço", { required: true })}
                placeholder="R$:00,00"
                type="text"
                className="p-2 rounded-xl text-xl"
              />
              <label className="font-bold text-lg after:content-['*'] after:text-red-500">
                Imagem:
              </label>
              <input
                className="p-2 rounded-xl text-xl"
                {...register("Imagem", { required: true })}
                type="file"
              />
              <section>
                <button
                  className=" px-5 py-2 rounded-xl bg-sky-400 text-lg hover:bg-black hover:text-white transition duration-400 ease-in"
                  type="submit"
                >
                  Cadastrar!
                </button>
              </section>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default Cadastro;
