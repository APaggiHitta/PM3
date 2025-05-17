import React, { useContext, useState } from "react";
import { cancelTurn } from "../../services/turnsService";
import styles from "./Turn.module.css";
import { TurnsContext } from "../../context/TurnsContext/TurnsContext";
import ModalWindow from "../ModalWindow/ModalWindow";

const Turn = ({ id, date, description, time, status }) => {
  const { updateTurnById } = useContext(TurnsContext);
  const [showModal, setShowModal] = useState(false);

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
