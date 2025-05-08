import React from "react";
import styles from "./Turn.module.css"; // Importa los estilos

const Turn = ({ date, description, time }) => {
  return (
    <div className={styles.card}>
      <h2>{description}</h2>
      <h3>Fecha: {date}</h3>
      <p>Hora: {time}</p>
    </div>
  );
};

export default Turn;
