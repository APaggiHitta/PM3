import styles from "./NavBar.module.css";
import logoAAT from "../../assets/img/logoAAT.png";
import logoHamburguer from "../../assets/img/logoHamburguer.svg";
import Menu from "../Menus/Menu";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <img className={styles.logo} src={logoAAT} alt="" />
      <div className={`${styles.menus} ${menuOpen ? styles.open : ""}`}>
        <Menu name={"Home"}></Menu>
        <Menu name={"Mis turnos"}></Menu>
        <Menu name={"About"}></Menu>
        <Menu name={"Contacto"}></Menu>
        <Menu name={"Iniciar sesión"}></Menu>
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
