const Login = () => {
  return (
    <div className="login form">
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form>
        <label htmlFor="emailLogin">
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            id="emailLogin"
            placeholder="Digite o seu email"
          />
        </label>

        <label htmlFor="passwordLogin">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            id="passwordLogin"
            placeholder="Digite a sua senha"
          />
        </label>

        <button type="button" className="btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
