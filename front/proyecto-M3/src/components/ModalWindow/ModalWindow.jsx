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
  loading = false, // 👈 nuevo prop
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>{title}</h3>
        <p>{message}</p>

        {loading && (
          <div className={styles.spinner}></div> // 👈 animación si está cargando
        )}

        {!loading && (
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
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
