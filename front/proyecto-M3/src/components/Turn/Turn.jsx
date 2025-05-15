import React, { useContext } from "react";
import axios from "axios";
import styles from "./Turn.module.css";
import { TurnsContext } from "../../context/TurnsContext/TurnsContext";

const Turn = ({ id, date, description, time, status }) => {
  const { updateTurnById } = useContext(TurnsContext);

  const handleCancel = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/turns/cancel/${id}`);
      updateTurnById(id, res.data); // Actualiza el contexto con el nuevo estado del turno
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    }
  };

  return (
    <div className={styles.card}>
      <h2>{description}</h2>
      <h3>Fecha: {date}</h3>
      <p>Hora: {time}</p>
      <p
        className={`${styles.status} ${
          status === "active" ? styles.active : styles.cancelled
        }`}
      >
        {status === "active" ? "Activo" : "Cancelado"}
      </p>
      <button
        disabled={status !== "active"}
        className={styles.cancelButton}
        onClick={handleCancel}
      >
        Cancelar
      </button>
    </div>
  );
};

export default Turn;
