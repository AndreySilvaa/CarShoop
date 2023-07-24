/* Para fazer a autenticação do usuário com o firebase, os usuários não ficam salvos no banco de dados
do firebase, que é o firestore
*/

import {
  getAuth, // Oferece funções de autenticação
  createUserWithEmailAndPassword, // Crie um usuário com email e senha
  signInWithEmailAndPassword, // Faz o login com email e senha
  updateProfile, // Faz a atualização do perfil
  signOut, // Função para sair da conta
} from "firebase/auth";

import { Auth, UserCredential} from "firebase/auth";  // Para fazer as tipagens

import { User } from "../interfaces/User";

import { useState, useEffect } from "react";

type AuthenticationReturnType = {
  auth: Auth,
  createUser: (data: User) => Promise<UserCredential | undefined>,
  error: null | string,
  load: boolean
}

export const useAuthentication = () => {
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState<boolean>(false);

  const auth: Auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data: User) => {
    // a função é assíncrona pois estamos nos conectando com um banco de dados(enviando informações)
    checkIfIsCancelled();

    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        // Precisamos atualizar o usuário para poder inserir o seu nome
        displayName: data.displayName,
      });

      return user;
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
  };
};

