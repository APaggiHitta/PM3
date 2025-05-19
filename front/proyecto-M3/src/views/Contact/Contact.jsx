import styles from "./Contact.module.css";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contáctanos</h1>
      <p className={styles.subtitle}>
        ¡Estamos aquí para ayudarte a planear tu próxima aventura inolvidable!
      </p>

      <div className={styles.infoSection}>
        <div className={styles.contactDetails}>
          <h2 className={styles.sectionTitle}>Información de contacto</h2>
          <p>
            <strong>📍 Dirección:</strong> Av. Eduardo Ribeiro 1023, Manaos,
            Brasil
          </p>
          <p>
            <strong>📞 Teléfono:</strong> +55 92 4002-8922
          </p>
          <p>
            <strong>📧 Email:</strong> amazingamazonastours@gmail.com
          </p>
          <p>
            <strong>🌐 Sitio web:</strong> www.amazingamazonastours.com
          </p>
        </div>

        <div className={styles.schedule}>
          <h2 className={styles.sectionTitle}>Horarios de atención</h2>
          <p>Lunes a sábado: 08:00 – 18:00</p>
          <p>
            <strong>Domingo: Cerrado</strong>
          </p>
        </div>
      </div>

      <div className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>Dónde estamos</h2>
        <iframe
          title="Ubicación de la empresa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.7195618310264!2d-60.0217316241741!3d-3.1316338970217407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057e3bbbd28f%3A0x6b74ed8db3d15b68!2sAv.%20Eduardo%20Ribeiro%2C%20Manaus%20-%20AM%2C%20Brasil!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
          className={styles.map}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre completo" />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" placeholder="Tu email" />
          </div>
          <div className={styles.formGroup}>
            <label>Mensaje</label>
            <textarea rows="5" placeholder="Escribe tu mensaje aquí..." />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
