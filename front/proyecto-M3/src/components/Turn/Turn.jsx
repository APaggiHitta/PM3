import React from "react";
import styles from "./Turn.module.css";

const Turn = ({ date, description, time, status }) => {
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
      <button disabled={status !== "active"} className={styles.cancelButton}>
        Cancelar
      </button>
    </div>
  );
};

export default Turn;
