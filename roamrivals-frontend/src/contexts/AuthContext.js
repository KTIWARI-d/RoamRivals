import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    setUser(response.data);
  };

  const register = async (name, email, password) => {
    const response = await axios.post("/api/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    setUser(response.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
