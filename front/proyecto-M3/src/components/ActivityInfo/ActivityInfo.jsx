import React from "react";
import styles from "./ActivityInfo.module.css";
import arrowReserve from "../../assets/img/direction-sign.svg"; // Asegúrate de que la ruta sea correcta

const ActivityInfo = ({ image, price, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Activity" className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      {/* El contenido que aparecerá al hacer hover */}
      <div className={styles.hoverContent}>
        <div className={styles.text}>Reserva esta aventura!</div>
        <button className={styles.reserveButton}>
          <img src={arrowReserve} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default ActivityInfo;
