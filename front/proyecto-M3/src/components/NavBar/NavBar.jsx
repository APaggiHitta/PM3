import styles from "./NavBar.module.css";
import logoAAT from "../../assets/img/logoAAT.png";
import logoHamburguer from "../../assets/img/logoHamburguer.svg";
import Menu from "../Menus/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={logoAAT} alt="" />
      <div className={`${styles.menus} ${menuOpen ? styles.open : ""}`}>
        <Link to={"/home"} className={styles.navLink}>
          <Menu name={"Home"}></Menu>
        </Link>
        <Link to={"turns"} className={styles.navLink}>
          <Menu name={"Mis turnos"} className={styles.navLink}></Menu>
        </Link>
        <Link to={"/about"} className={styles.navLink}>
          <Menu name={"About"}></Menu>
        </Link>
        <Link to={"/contact"} className={styles.navLink}>
          <Menu name={"Contacto"}></Menu>
        </Link>
        <Link to={"/login"} className={styles.navLink}>
          <Menu name={"Iniciar sesión"}></Menu>
        </Link>
      </div>

      <img
        className={styles.hamburguerIcon}
        src={logoHamburguer}
        alt="Hamburguer"
        onClick={handleToggleMenu}
      />
    </div>
  );
};

export default NavBar;
