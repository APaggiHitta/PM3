import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../hooks/useLogin";
import { validate, getInitialRegisterErrors } from "../../helpers/validate";
import { registerUser } from "../../services/authService";

import styles from "../../styles/Form.module.css";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { FormInput } from "../../components/FormInput/FormInput";

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

const initialErrors = getInitialRegisterErrors();

const Register = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState(initialErrors);
  const [isRegistered, setIsRegistered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const [serviceError, setServiceError] = useState("");
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

    const formData = new FormData();

    formData.append("name", fullName);
    formData.append("email", userData.email);
    formData.append("birthdate", userData.birthdate);
    formData.append("nDni", Number(userData.nDni).toString());
    formData.append("username", userData.email);
    formData.append("password", userData.password1);

    if (userData.photo) {
      formData.append("photo", userData.photo);
    }

    const result = await registerUser(formData);

    if (result.success) {
      setRegisteredName(formatName(userData.username));
      setShowModal(true);
      setIsRegistered(true);

      await loginUser({
        email: userData.email,
        password: userData.password1,
      });
    } else {
      setServiceError(result.error);
      setShowModal(true);
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

  const { loginUser } = useLogin();

  return (
    <>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>CREA UN NUEVO USUARIO</h2>

      <div className={styles.container}>
        {showModal && (
          <ModalWindow
            title={serviceError ? "Ups!!" : `¡Bienvenido ${registeredName}!`}
            message={
              serviceError
                ? serviceError
                : "Tu usuario se ha dado de alta en nuestra base de datos. Te redirigiremos a la pagina de reservas!"
            }
            onClose={() => {
              setShowModal(false);
              if (!serviceError) {
                navigate("/turns");
              }
              setServiceError("");
            }}
          />
        )}

        <form onSubmit={handleOnSubmit} className={styles.form}>
          <FormInput
            label="Nombre"
            name="username"
            type="text"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="John"
            error={errors.username}
          />

          <FormInput
            label="Apellido"
            name="userlastname"
            type="text"
            value={userData.userlastname}
            onChange={handleInputChange}
            placeholder="Doe"
            error={errors.userlastname}
          />
          <FormInput
            label="E-Mail"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="ejemplo@mail.com"
            error={errors.email}
          />

          <FormInput
            label="Fecha de nacimiento"
            name="birthdate"
            type="date"
            value={userData.birthdate}
            onChange={handleInputChange}
            error={errors.birthdate}
          />

          <FormInput
            label="Número de documento"
            name="nDni"
            type="text"
            value={userData.nDni}
            onChange={handleInputChange}
            error={errors.nDni}
          />

          <div className={styles.inputGroup}>
            <label>Foto (opcional)</label>
            <input type="file" name="photo" onChange={handleInputChange} />
          </div>

          <FormInput
            label="Contraseña"
            name="password1"
            type="password"
            value={userData.password1}
            onChange={handleInputChange}
            placeholder="******"
            error={errors.password1}
          />

          <FormInput
            label="Repite la contraseña"
            name="password2"
            type="password"
            value={userData.password2}
            onChange={handleInputChange}
            placeholder="******"
            error={errors.password2}
          />

          <FormInput
            type="checkbox"
            name="acceptPolicies"
            checked={userData.acceptPolicies}
            onChange={handleInputChange}
            label="Acepto los Términos y Condiciones y las Políticas de Privacidad"
            error={errors.acceptPolicies}
          />

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
