export const validate = (fieldName, fieldValue, userData) => {
  const errors = {};

  switch (fieldName) {
    case "username":
      if (!fieldValue.trim()) {
        errors.username = "Nombre del usuario es obligatorio";
      }
      break;

    case "userlastname":
      if (!fieldValue.trim()) {
        errors.userlastname = "Apellido del usuario es obligatorio";
      }
      break;

    case "email":
      if (!fieldValue.trim()) {
        errors.email = "E-Mail del usuario es obligatorio";
      } else if (!/\S+@\S+\.\S+/.test(fieldValue)) {
        errors.email = "El formato del E-Mail no es válido";
      }
      break;

    case "birthdate":
      if (!fieldValue.trim()) {
        errors.birthdate = "Fecha de nacimiento del usuario es obligatoria";
      } else {
        const birthDate = new Date(fieldValue);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        const day = today.getDate() - birthDate.getDate();
        if (
          age < 18 ||
          (age === 18 && (month < 0 || (month === 0 && day < 0)))
        ) {
          errors.birthdate = "Debes tener al menos 18 años para registrarte";
        }
      }
      break;

    case "nDni":
      if (!fieldValue.trim()) {
        errors.nDni = "Número de documento del usuario es obligatorio";
      } else if (!/^\d+$/.test(fieldValue)) {
        errors.nDni = "Solo números sin puntos ni guiones";
      }
      break;

    case "password1":
      if (!fieldValue.trim()) {
        errors.password1 = "Se debe ingresar una contraseña";
      } else if (fieldValue.length < 6) {
        errors.password1 = "La contraseña debe tener al menos 6 caracteres";
      }
      break;

    case "password2":
      if (!fieldValue.trim()) {
        errors.password2 = "Se debe repetir la contraseña";
      } else if (fieldValue !== userData.password1) {
        errors.password2 = "Las contraseñas no coinciden";
      }
      break;

    case "acceptPolicies":
      if (!fieldValue) {
        errors.acceptPolicies =
          "Debes aceptar nuestras Políticas para continuar";
      }
      break;

    default:
      break;
  }

  return errors;
};

export default validate;
