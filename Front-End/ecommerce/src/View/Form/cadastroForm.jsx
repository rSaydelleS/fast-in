import { useForm } from "react-hook-form";

const Cadastro = () => {
  const { register, handleSubmit } = useForm();

  const cadastrarProduto = (data) => {
    console.log(data);
  };
  return (
    <>
      <main>
        <section>
          <section>
            <h1>Cadastre seu produto</h1>
          </section>
        </section>
        <section>
          <form onSubmit={handleSubmit((data) => cadastrarProduto(data))}>
            <label>Nome do produto:</label>
            <input
              {...register("Produto", { required: true })}
              placeholder="Seu produto"
              type="text"
            />
            <label>Preço:</label>
            <input
              {...register("Preço", { required: true })}
              placeholder="R$:00,00"
              type="text"
            />
            <label>Imagem:</label>
            <input {...register("Imagem", { required: true })} type="file" />
            <button type="submit">Cadastrar!</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Cadastro;
