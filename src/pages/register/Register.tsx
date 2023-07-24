import { useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import { User } from "../../interfaces/User";

import { Auth, UserCredential} from "firebase/auth";  // Para fazer as tipagens

const Register = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const{auth, createUser, error: authError, load}:{  // TIPAGEM DANDO ERROR
    auth: Auth;
    createUser: (data: User) => Promise<UserCredential | undefined>;
    authError: null | string;
    load: boolean;
  } = useAuthentication

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }

    console.log(user)
  };

  return (
    <div className="register form">
      <h1>Crie sua conta</h1>
      <p>Cadastre-se para conquistar o carro dos sonhos</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nome:</span>
          <input
            type="text"
            placeholder="Digite seu nome"
            name="name"
            id="name"
            required
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          <span>E-mail:</span>
          <input
            type="email"
            placeholder="Digite seu email"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label htmlFor="confirmPassword">
          <span>Confirmar senha:</span>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        {error && (<p className="error">{error}</p>)}

        <button type="submit" className="btn">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Register;
