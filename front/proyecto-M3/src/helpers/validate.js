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

        // Validar que no sea una fecha futura
        if (birthDate > today) {
          errors.birthdate =
            "La fecha de nacimiento no puede estar en el futuro";
        } else {
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
      }
      break;

    case "date":
      if (!fieldValue.trim()) {
        errors.date = "Debes elegir una fecha";
      } else {
        const [year, month, day] = fieldValue.split("-").map(Number);
        const selectedDate = new Date(year, month - 1, day);

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Elimina hora/minutos/segundos para comparar solo fechas

        if (selectedDate <= today) {
          errors.date = "Solo se permiten fechas a partir de mañana";
        } else if (selectedDate.getDay() === 0) {
          errors.date = "Recuerda que no trabajamos los domingos!";
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

    case "activity":
      if (!fieldValue) {
        errors.activity = "Debes seleccionar una actividad";
      }
      break;

    case "time":
      if (!fieldValue) {
        errors.time = "Debes seleccionar un horario";
      }
      break;

    default:
      break;
  }

  return errors;
};

export const getInitialRegisterErrors = () => {
  return {
    username: "Nombre del usuario es obligatorio",
    userlastname: "Apellido del usuario es obligatorio",
    email: "E-Mail del usuario es obligatorio",
    birthdate: "Fecha de nacimiento del usuario es obligatoria",
    nDni: "Número de documento del usuario es obligatorio (sin puntos ni guiones)",
    password1: "Se debe ingresar una contraseña",
    password2: "Se debe repetir la contraseña",
    acceptPolicies: "Debes aceptar nuestras Políticas para continuar",
  };
};
