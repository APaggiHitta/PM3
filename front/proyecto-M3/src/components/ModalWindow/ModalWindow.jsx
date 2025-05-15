// src/components/ModalWindow.jsx
import styles from "./ModalWindow.module.css";

const ModalWindow = ({ title, message, onClose, buttonText = "Cerrar" }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>{title}</h3>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
