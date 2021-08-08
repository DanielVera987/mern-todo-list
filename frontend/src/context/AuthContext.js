import { createContext, useState, useEffect } from "react";
import serviceAuth from "../services/Auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(false);

  const signUp = async (user) => {
    const data = await serviceAuth.login(user);
    if (!data.message && !data.statusCode) {
      setToken(data.token);
      setIsAuthenticated(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  const signOff = () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsAuthenticated(false);
      setToken(false);
    }
  };

  useEffect(() => {
    const isToken = () => {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        const user = localStorage.getItem("user");
        setIsAuthenticated(user);
      }
    };

    isToken();
  });

  const data = { isAuthenticated, signUp, signOff, token };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
