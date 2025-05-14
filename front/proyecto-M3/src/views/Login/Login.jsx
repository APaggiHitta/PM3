import styles from "../Register/Register.module.css";
import { useState } from "react";
import { validate } from "../../helpers/validate";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password1: "",
  });

  const [errors, setErrors] = useState({
    email: "E-Mail del usuario es obligatorio",
    password1: "Se debe ingresar una contraseña",
  });

  const isFormValid = Object.values(errors).every((error) => error === "");

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const updatedData = {
      ...userData,
      [name]: value,
    };

    setUserData(updatedData);

    const fieldError = validate(name, value, updatedData);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError[name] || "",
    }));
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      username: userData.email,
      password: userData.password1,
    };
    console.log(payload);
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        payload
      );
      console.log("Respuesta del servidor:", response.data);
      alert("Usuario logueado con éxito");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Ups!! Revisa nombre de usuario o contraseña ingresados");
    }
  };

  return (
    <>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>
        BIENVENIDO!! INGRESA TUS DATOS PARA ACCEDER AL SITIO
      </h2>

      <div className={styles.container}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Usuario (E-Mail)</label>
            <input
              type="text"
              name="email"
              placeholder="example@mail.com"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              name="password1"
              placeholder="******"
              onChange={handleInputChange}
            />
            {errors.password1 && (
              <p className={styles.errorMessage}>{errors.password1}</p>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid}
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
