import { createContext, useState, useEffect } from "react";
import serviceAuth from "../services/Auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const signUp = async (user) => {
    const data = await serviceAuth.login(user);
    console.log(data);
    if (data) {
      setToken(data.token);
      setIsAuthenticated(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  const isToken = () => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      const user = localStorage.getItem("user");
      setIsAuthenticated(user);
    }
  };

  useEffect(() => {
    isToken();
  }, []);

  const data = { isAuthenticated, signUp, token };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
