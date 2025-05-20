import { useState, useRef, useEffect } from "react";
import { validate } from "../../helpers/validate";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { FormInput } from "../../components/FormInput/FormInput";
import styles from "../../styles/Form.module.css";

const Login = () => {
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);

  const navigate = useNavigate();
  const { loginUser, loading } = useLogin();

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

    const { success, user } = await loginUser({
      email: userData.email,
      password: userData.password1,
    });

    if (success) {
      const firstName = user.name?.split(" ")[0] || "usuario";
      setModalTitle(`Hola ${firstName}`);
      setModalMessage("Bienvenido a las aventuras de tu vida");
      setLoginSuccess(true);
    } else {
      setModalTitle("¡Ups! Algo ha ido mal");
      setModalMessage("Revisa que tu usuario y contraseña sean correctos.");
      setLoginSuccess(false);
    }

    setShowModal(true);
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
          <FormInput
            label="Usuario (E-Mail)"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="ejemplo@mail.com"
            error={errors.email}
            ref={emailInputRef}
          />

          <FormInput
            label="Contraseña"
            name="password1"
            type="password"
            value={userData.password1}
            onChange={handleInputChange}
            placeholder="******"
            error={errors.password1}
          />

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid || loading}
          >
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
