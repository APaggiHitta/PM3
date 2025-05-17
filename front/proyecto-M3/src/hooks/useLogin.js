import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext/UserContext";
import { login as loginService } from "../services/authService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useContext(UserContext);

  const loginUser = async ({ email, password }) => {
    setLoading(true);
    setError(null);

    try {
      const result = await loginService({
        email,
        password,
      });

      if (result.success) {
        login(result.user);
        return { success: true, user: result.user };
      } else {
        setError(result.error || "Usuario o contraseña incorrectos.");
        return { success: false };
      }
    } catch (err) {
      console.error("Error inesperado al loguear usuario:", err);
      setError("Ocurrió un error inesperado.");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, error };
};
