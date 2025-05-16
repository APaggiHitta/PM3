import styles from "../../styles/Form.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../../helpers/validate";
import axios from "axios";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const initialUserData = {
  username: "",
  userlastname: "",
  email: "",
  birthdate: "",
  nDni: "",
  photo: "",
  password1: "",
  password2: "",
  acceptPolicies: false,
};

const initialErrors = {
  username: "Nombre del usuario es obligatorio",
  userlastname: "Apellido del usuario es obligatorio",
  email: "E-Mail del usuario es obligatorio",
  birthdate: "Fecha de nacimiento del usuario es obligatoria",
  nDni: "Número de documento del usuario es obligatorio (sin puntos ni guiones)",
  password1: "Se debe ingresar una contraseña",
  password2: "Se debe repetir la contraseña",
  acceptPolicies: "Debes aceptar nuestras Políticas para continuar",
};

const Register = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState(initialErrors);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    const fieldValue =
      type === "checkbox" ? checked : name === "photo" ? files[0] : value;

    const updatedData = {
      ...userData,
      [name]: fieldValue,
    };

    setUserData(updatedData);

    const fieldError = validate(name, fieldValue, updatedData);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError[name] || "",
    }));
  };

  const formatName = (text) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const handleOnSubmit = async (event) => {
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
      await axios.post("http://localhost:3000/users/register", payload);
      setRegisteredName(formatName(userData.username));
      setShowModal(true);
      setIsRegistered(true);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Hubo un error al registrar el usuario");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((e) => e === "") &&
      Object.entries(userData).every(([key, value]) => {
        if (key === "photo") return true;
        if (typeof value === "boolean") return value;
        return value.toString().trim() !== "";
      })
    );
  };

  useEffect(() => {
    if (isRegistered) {
      setUserData(initialUserData);
      setErrors(initialErrors);
      setIsRegistered(false);
    }
  }, [isRegistered]);

  return (
    <>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>CREA UN NUEVO USUARIO</h2>

      <div className={styles.container}>
        {showModal && (
          <ModalWindow
            title={`¡Bienvenido ${registeredName}!`}
            message="Tu usuario se ha dado de alta en nuestra base de datos. Ingresa tus credenciales en el Login!"
            onClose={() => {
              setShowModal(false);
              navigate("/login");
            }}
          />
        )}

        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Nombre</label>
            <input
              type="text"
              name="username"
              placeholder="John"
              value={userData.username}
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
              value={userData.userlastname}
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
              value={userData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="birthdate"
              value={userData.birthdate}
              onChange={handleInputChange}
            />
            {errors.birthdate && (
              <p className={styles.errorMessage}>{errors.birthdate}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Número de documento</label>
            <input
              type="text"
              name="nDni"
              value={userData.nDni}
              onChange={handleInputChange}
            />
            {errors.nDni && (
              <p className={styles.errorMessage}>{errors.nDni}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Foto (opcional)</label>
            <input type="file" name="photo" onChange={handleInputChange} />
          </div>

          <div className={styles.inputGroup}>
            <label>Contraseña</label>
            <input
              type="password"
              name="password1"
              placeholder="******"
              value={userData.password1}
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
              value={userData.password2}
              onChange={handleInputChange}
            />
            {errors.password2 && (
              <p className={styles.errorMessage}>{errors.password2}</p>
            )}
          </div>

          <label className={styles.termsConditions}>
            <input
              type="checkbox"
              name="acceptPolicies"
              checked={userData.acceptPolicies}
              onChange={handleInputChange}
            />
            Acepto los Términos y Condiciones y las Políticas de Privacidad
          </label>
          {errors.acceptPolicies && (
            <p className={styles.errorMessage}>{errors.acceptPolicies}</p>
          )}

          <button
            disabled={!isFormValid()}
            type="submit"
            className={styles.submitButton}
          >
            Crear usuario
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
