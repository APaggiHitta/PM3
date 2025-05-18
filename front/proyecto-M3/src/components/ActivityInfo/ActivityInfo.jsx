import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ActivityInfo.module.css";
import arrowReserve from "../../assets/img/direction-sign.svg";
import { UserContext } from "../../context/UserContext/UserContext";

const ActivityInfo = ({ image, price, description }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleReserveClick = () => {
    if (user) {
      navigate("/turns");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt="Activity" className={styles.image} />
      <div className={styles.textContainer}>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div className={styles.hoverContent}>
        <div className={styles.text}>¡Reserva esta aventura!</div>
        <button className={styles.reserveButton} onClick={handleReserveClick}>
          <img src={arrowReserve} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default ActivityInfo;
