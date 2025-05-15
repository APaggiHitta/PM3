import styles from "../../styles/Form.module.css";
import { useState, useContext } from "react";
import { validate } from "../../helpers/validate";
import axios from "axios";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password1: "",
  });

  const [errors, setErrors] = useState({
    email: "E-Mail del usuario es obligatorio",
    password1: "Se debe ingresar una contraseña",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [loginSuccess, setLoginSuccess] = useState(false);

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

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        payload
      );

      const user = response.data.user;

      login(user);

      const firstName = user.name?.split(" ")[0] || "usuario";
      setModalTitle(`Hola ${firstName}`);
      setModalMessage("Bienvenido a las aventuras de tu vida");
      setLoginSuccess(true);
      setShowModal(true);
    } catch (error) {
      console.error("Error al loguear usuario:", error);
      setModalTitle("¡Ups! Algo ha ido mal");
      setModalMessage(
        "Revisa que tu usuario y contraseña proporcionados sean correctos."
      );
      setLoginSuccess(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (loginSuccess) {
      navigate("/turns");
    }
  };

  return (
    <>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>
        BIENVENIDO!! INGRESA TUS DATOS PARA ACCEDER AL SITIO
      </h2>

      <p className={styles.registerPrompt}>
        ¿Aún no tienes usuario?{" "}
        <Link to="/register" className={styles.navLink}>
          ¡Regístrate!
        </Link>
      </p>

      <div className={styles.container}>
        {showModal && (
          <ModalWindow
            title={modalTitle}
            message={modalMessage}
            buttonText="Listo!"
            onClose={handleCloseModal}
          />
        )}
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
