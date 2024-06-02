import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <main>
        <section>
          <h1>Bem vndo ao fast-in</h1>
        </section>
        <section>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <label>Email:</label>
            <input
              type="text"
              placeholder="Digite seu email"
              {...register("Email")}
            />
            <label>Senha:</label>
            <input
              type="password"
              placeholder="******"
              {...register("Senha")}
            />
            <button type="submit">Entrar!</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
