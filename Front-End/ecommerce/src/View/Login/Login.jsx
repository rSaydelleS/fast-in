import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-4 bg-gray-300 w-screen h-screen">
        <div className="p-10 bg-slate-200 shadow-xl shadow-black rounded-xl">
          <section className="text-3xl items-start font-bold">
            <h1>Bem vndo ao fast-in</h1>
          </section>
          <section>
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
              })}
              className="flex flex-col items-start gap-8 font-semibold"
            >
              <label className="text-2xl">Email:</label>
              <input
                type="text"
                placeholder="Digite seu email"
                {...register("Email", { required: true })}
                className="px-4 py-2 rounded-xl text-xl"
              />
              <label className="text-2xl">Senha:</label>
              <input
                type="password"
                placeholder="******"
                {...register("Senha", { required: true })}
                className="px-4 py-2 rounded-xl text-xl"
              />
              {errors.Senha && (
                <span className="text-red-500 text-xl border-b-2 border-red-500">
                  Email ou senha não cadastrados
                </span>
              )}
              <div className="flex flex-row justify-around items-end w-full">
                <a className="w-40 cursor-pointer">
                  Não possui uma conta? Clique aqui para criar
                </a>
                <button
                  className=" px-5 py-2 rounded-xl bg-green-400 text-lg"
                  type="submit"
                >
                  Entrar!
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;
