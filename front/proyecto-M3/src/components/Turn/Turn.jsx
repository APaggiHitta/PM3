import React, { useContext, useState } from "react";
import { cancelTurn } from "../../services/turnsService";
import styles from "./Turn.module.css";
import { TurnsContext } from "../../context/TurnsContext/TurnsContext";
import ModalWindow from "../ModalWindow/ModalWindow";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import bg1 from "../../assets/img/backTurn/fondoTurn1.jpg";
import bg2 from "../../assets/img/backTurn/fondoTurn2.webp";
import bg3 from "../../assets/img/backTurn/fondoTurn3.webp";
import bg4 from "../../assets/img/backTurn/fondoTurn4.webp";
import bg5 from "../../assets/img/backTurn/fondoTurn5.jpg";

const Turn = ({ id, date, description, time, status }) => {
  const { updateTurnById } = useContext(TurnsContext);
  const [showModal, setShowModal] = useState(false);

  const images = [bg1, bg2, bg3, bg4, bg5];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const handleCancel = async () => {
    try {
      const updatedTurn = await cancelTurn(id);
      updateTurnById(id, updatedTurn);
    } catch (error) {
      console.error("Error al cancelar el turno:", error);
    } finally {
      setShowModal(false);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(236, 141, 36, 0.6)), url(${randomImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2>{description}</h2>
      <h3>
        <FaCalendarAlt /> {date}
      </h3>
      <p>
        <FaClock /> {time}
      </p>

      <p
        className={`${styles.status} ${
          status === "active" ? styles.active : styles.cancelled
        }`}
      >
        {status === "active" ? (
          <>
            <FaCheckCircle /> <span>Activo</span>
          </>
        ) : (
          <>
            <FaTimesCircle /> <span>Cancelado</span>
          </>
        )}
      </p>

      <button
        className={`${styles.cancelButton} ${
          status !== "active" ? styles.hidden : ""
        }`}
        onClick={openModal}
      >
        Cancelar
      </button>

      {showModal && (
        <ModalWindow
          title="¿Seguro que querés cancelar?"
          message="😢 ¡Nos entristece saber que querés cancelar esta aventura! ¿Estás seguro de que no querés vivir esta experiencia única?"
          showConfirm={true}
          onConfirm={handleCancel}
          onClose={closeModal}
          confirmText="Sí, cancelar"
          cancelText="No, mantener"
        />
      )}
    </div>
  );
};

export default Turn;
