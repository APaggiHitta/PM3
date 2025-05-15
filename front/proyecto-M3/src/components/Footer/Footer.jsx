import styles from "./Footer.module.css";
import logoAAT from "../../assets/img/logoAAT.png";
import logoWhatsapp from "../../assets/img/brand-whatsapp.svg";
import logoFB from "../../assets/img/brand-facebook.svg";
import logoIG from "../../assets/img/brand-instagram.svg";
import logoYT from "../../assets/img/brand-youtube.svg";

const Footer = () => {
  return (
    <footer className={styles.mainContainer}>
      <div>
        <img className={styles.logo} src={logoAAT} alt="Logo AAT" />
        <div className={styles.telefono}>
          <img src={logoWhatsapp} alt="Logo de whatsapp" />
          <p>+55 92 4002-8922</p>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <h3>Social Media</h3>
        <div>
          <img src={logoFB} alt="Logo de FB" />
          <img src={logoIG} alt="Logo de IG" />
          <img src={logoYT} alt="Logo de YT" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
