import styles from "../../styles/Form.module.css";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { validate } from "../../helpers/validate";

const AddTurn = () => {
  const [turnData, setTurnData] = useState({
    activity: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({
    date: "Debes elegir una fecha",
    time: "Debes elegir una hora",
  });

  const isFormValid = Object.values(errors).every((error) => error === "");

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...turnData,
      [name]: value,
    };

    setTurnData(updatedData);

    const fieldError = validate(name, value, updatedData);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError[name] || "", // Borra el error si ya no hay
    }));
  };

  return (
    <>
      <h2 className={styles.subtitle}>
        {user?.name
          ? `${user.name
              .split(" ")[0]
              .toUpperCase()}, VAMOS A AGENDAR TU PRÓXIMA AVENTURA!`
          : "VAMOS A AGENDAR TU PRÓXIMA AVENTURA!"}
      </h2>

      <div className={styles.container}>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Qué actividad agendarás?</label>

            <select
              className={styles.activitySelection}
              id="activity"
              name="activity"
              value={turnData.activity}
              onChange={handleChange}
            >
              <option value="kayak">Kayak en el Amazonas</option>
              <option value="senderismo">Senderismo por la selva</option>
              <option value="avistamiento">Avistamiento de fauna</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label>Qué día?</label>
            <input
              type="date"
              name="date"
              value={turnData.date}
              onChange={handleChange}
            />

            {errors.date && (
              <p className={styles.errorMessage}>{errors.date}</p>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label>Elige una hora</label>

            <select
              className={styles.activitySelection}
              id="time"
              name="time"
              value={turnData.time}
              onChange={handleChange}
            >
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
            </select>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid}
          >
            Agéndalo!
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTurn;
