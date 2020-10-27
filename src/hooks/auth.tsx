import React, { createContext, useCallback, useState } from "react";
import { useContext } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: object;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;

  sigIn(credentials: Credentials): Promise<void>;
  sigOut(): void;
}

/**
 * Creating the context by starting void
 */
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/**
 * The actual Component that will encapsulate the others that belong
 * to that context of authentication
 */
const AuthProvider: React.FC = ({ children }) => {
  
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Marker:token');
    const user = localStorage.getItem('@Marker:user');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }


    return {} as AuthState;

  });
  

  /**
   * Login de fato (chamando api post "/sessions")
   */
  const sigIn = useCallback(async ({ email, password}) => {
    console.log(email, password)
    const response = await api.post('/sessions', {
      email,
      password
    })

    const { token, user } = response.data;

    localStorage.setItem('@Marker:token', token);
    localStorage.setItem('@Marker:user', JSON.stringify(user));

    setData({ token, user });
  }, [])


  const sigOut = useCallback(() => {

    localStorage.removeItem('@Marker:token');
    localStorage.removeItem('@Marker:user');

    setData({ } as AuthState);
  }, [])

  return (
    /**
     * Value são todos  os dados globais ou funções pertecente a esse
     * componente que podem ser acessada pelos demais
     */
    <AuthContext.Provider value={{ user: data.user, sigIn, sigOut }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {  
    throw new Error('useAuth must be used within a Authentication')
  }

  return context;
}

export { AuthProvider, useAuth }