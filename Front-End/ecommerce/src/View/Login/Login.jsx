import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handelSubmit } = useForm();

  return (
    <>
      <main>
        <section>
          <h1>Bem vndo ao fast-in</h1>
        </section>
        <section>
          <form>
            <p>Email:</p>
            <input name="email" placeholder="Digite seu email..." />
            <p>Senha:</p>
            <input name="senha" placeholder="******" />
            <button type="submit"></button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
