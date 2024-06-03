import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <main className="">
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
              {...register("Email", { required: true })}
            />
            <label>Senha:</label>
            <input
              type="password"
              placeholder="******"
              {...register("Senha", { required: true })}
            />
            {errors.Senha && <span>Email ou senha não eocntrados</span>}
            <button type="submit">Entrar!</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
