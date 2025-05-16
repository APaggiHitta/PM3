// src/components/ModalWindow.jsx
import styles from "./ModalWindow.module.css";

const ModalWindow = ({
  title,
  message,
  onClose,
  buttonText = "Cerrar",
  showConfirm = false,
  onConfirm,
  confirmText = "Sí",
  cancelText = "No",
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>{title}</h3>
        <p>{message}</p>

        <div className={styles.buttonGroup}>
          {showConfirm ? (
            <>
              <button onClick={onConfirm} className={styles.confirmButton}>
                {confirmText}
              </button>
              <button onClick={onClose} className={styles.cancelButton}>
                {cancelText}
              </button>
            </>
          ) : (
            <button onClick={onClose} className={styles.closeButton}>
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
