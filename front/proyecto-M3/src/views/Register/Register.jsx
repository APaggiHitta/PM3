import styles from "./Register.module.css";
import { useState } from "react";
import { validate } from "../../helpers/validate";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    userlastname: "",
    email: "",
    birthdate: "",
    nDni: "",
    photo: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    username: "Nombre del usuario es obligatorio",
    userlastname: "Apellido del usuario es obligatorio",
    email: "E-Mail del usuario es obligatorio",
    birthdate: "Fecha de nacimiento del usuario es obligatoria",
    nDni: "Número de documento del usuario es obligatorio (sin puntos ni guiones)",
    password1: "Se debe ingresar una contraseña",
    password2: "Se debe repetir la contraseña",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Actualizar el estado de los datos del usuario
    const updatedData = {
      ...userData,
      [name]: value,
    };

    setUserData(updatedData);

    // Validar solo ese campo y pasar userData completo para comparar contraseñas
    const fieldError = validate(name, value, updatedData);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError[name] || "", // Si no hay error, lo borra
    }));
  };

  const formatName = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const fullName = `${formatName(userData.username)} ${formatName(
      userData.userlastname
    )}`;

    const payload = {
      name: fullName,
      email: userData.email,
      birthdate: userData.birthdate,
      nDni: Number(userData.nDni),
      username: userData.email,
      password: userData.password1,
    };

    try {
      const response = axios.post(
        "http://localhost:3000/users/register",
        payload
      );
      console.log("Respuesta del servidor:", response.data);
      alert("Usuario registrado con éxito");
      // Podés limpiar el formulario si querés:
      // setUserData({ ... }); // vaciar los campos
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un error al registrar el usuario");
    }
  };

  return (
    <>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>CREA UN NUEVO USUARIO</h2>

      <div className={styles.container}>
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input
              type="text"
              name="username"
              placeholder="John"
              onChange={handleInputChange}
            />
            {errors.username && (
              <p className={styles.errorMessage}>{errors.username}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Apellido</label>
            <input
              type="text"
              name="userlastname"
              placeholder="Doe"
              onChange={handleInputChange}
            />
            {errors.userlastname && (
              <p className={styles.errorMessage}>{errors.userlastname}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>E-Mail</label>
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
            <label>Fecha de nacimiento</label>
            <input type="date" name="birthdate" onChange={handleInputChange} />
            {errors.birthdate && (
              <p className={styles.errorMessage}>{errors.birthdate}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Número de documento</label>
            <input type="number" name="nDni" onChange={handleInputChange} />
            {errors.nDni && (
              <p className={styles.errorMessage}>{errors.nDni}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Foto (opcional)</label>
            <input
              type="file"
              name="photo"
              placeholder="Click para subir una foto desde tu dispositivo"
              onChange={handleInputChange}
            />

            {errors.photo && (
              <p className={styles.errorMessage}>{errors.photo}</p>
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

          <div className={styles.inputGroup}>
            <label>Repite la contraseña</label>
            <input
              type="password"
              name="password2"
              placeholder="******"
              onChange={handleInputChange}
            />
            {errors.password2 && (
              <p className={styles.errorMessage}>{errors.password2}</p>
            )}
          </div>

          <button className={styles.submitButton}>Crear usuario</button>
        </form>
      </div>
    </>
  );
};

export default Register;
