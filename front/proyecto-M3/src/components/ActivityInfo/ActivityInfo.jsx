import React from "react";
import styles from "./ActivityInfo.module.css";

const ActivityInfo = ({ image, price, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Activity" className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
        <button className={styles.reserveButton}>Reservar</button>
      </div>
    </div>
  );
};

export default ActivityInfo;
