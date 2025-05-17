import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
      username: email,
      password,
    });
    return {
      success: true,
      user: response.data.user,
    };
  } catch (error) {
    console.error("Error en login:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Error en el servidor",
    };
  }
};

export const registerUser = async (formData) => {
  try {
    await axios.post(`${API_BASE_URL}/users/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error.response?.data?.error || "Hubo un error al registrar el usuario",
    };
  }
};
