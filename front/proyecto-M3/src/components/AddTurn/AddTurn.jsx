import styles from "../../styles/Form.module.css";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { validate } from "../../helpers/validate";
import { addTurn } from "../../services/turnsService";
import { getActivities } from "../../services/activitiesService";

import ModalWindow from "../../components/ModalWindow/ModalWindow";
import { FormInput, FormSelect } from "../FormInput/FormInput";

const AddTurn = ({ refreshTurns }) => {
  const [turnData, setTurnData] = useState({
    activity: "",
    date: "",
    time: "",
  });

  const [activities, setActivities] = useState([]);

  const [errors, setErrors] = useState({
    activity: "Debes elegir una actividad",
    date: "Debes elegir una fecha",
    time: "Debes elegir una hora",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = Object.values(errors).every((err) => err === "");

  const { user } = useContext(UserContext);

  useEffect(() => {
    getActivities()
      .then(setActivities)
      .catch((err) => console.error("Error al traer actividades:", err));
  }, []);

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
      [name]: fieldError[name] || "",
    }));

    if (name === "date") {
      e.target.blur();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid || !user) return;

    const [year, month, day] = turnData.date.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    const isoLocalDate = new Date(
      localDate.getFullYear(),
      localDate.getMonth(),
      localDate.getDate(),
      12
    ).toISOString();

    const turnPayload = {
      date: isoLocalDate,
      time: turnData.time,
      userId: user.id,
      activity_id: Number(turnData.activity),
      status: "active",
    };

    setIsLoading(true); // Mostrar modal de carga

    try {
      await addTurn(turnPayload);

      setModalTitle("¡Tu aventura está confirmada!");
      setModalMessage(
        `Has agendado con éxito tu próxima experiencia en el Amazonas. Te hemos enviado un correo a ${user.email} ¡Prepárate para una jornada inolvidable!`
      );
      setShowModal(true);
      if (refreshTurns) refreshTurns();
      setTurnData({ activity: "", date: "", time: "" });
      setErrors({
        activity: "Debes elegir una actividad",
        date: "Debes elegir una fecha",
        time: "Debes elegir una hora",
      });
    } catch (error) {
      console.error("Error al agendar el turno:", error);
      setModalTitle("Error al agendar turno");
      setModalMessage("Por favor, intenta nuevamente más tarde.");
      setShowModal(true);
    } finally {
      setIsLoading(false); // Ocultar modal de carga
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
        {showModal && (
          <ModalWindow
            title={modalTitle}
            message={modalMessage}
            buttonText="¡Estoy listo!"
            onClose={handleCloseModal}
          />
        )}

        {isLoading && (
          <ModalWindow
            title="Estamos creando tu reserva..."
            message="Por favor, espera unos segundos"
            loading={true}
          />
        )}

        <form className={styles.formWide} onSubmit={handleSubmit}>
          <div className={styles.inputRow}>
            <FormSelect
              label="¿Qué actividad agendarás?"
              name="activity"
              value={turnData.activity}
              onChange={handleChange}
              error={errors.activity}
              options={activities.map((act) => ({
                value: act.id,
                label: act.name,
              }))}
            />

            <FormInput
              label="¿Qué día?"
              type="date"
              name="date"
              value={turnData.date}
              onChange={handleChange}
              error={errors.date}
            />

            <FormSelect
              label="Elige una hora"
              name="time"
              value={turnData.time}
              onChange={handleChange}
              error={errors.time}
              options={[
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
              ]}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={!isFormValid}
          >
            ¡Agéndalo!
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTurn;
