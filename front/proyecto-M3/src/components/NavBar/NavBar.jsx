import styles from "./NavBar.module.css";
import logoAAT from "../../assets/img/logoAAT.png";
import logoHamburguer from "../../assets/img/logoHamburguer.svg";
import userAvatar from "../../assets/img/userAvatar.svg";
import Menu from "../Menus/Menu";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout(); // Limpia el contexto
    navigate("/home"); // Redirige al home
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.mainContainer}>
      <Link to={"/home"}>
        <img className={styles.logo} src={logoAAT} alt="" />
      </Link>
      <div className={`${styles.menus} ${menuOpen ? styles.open : ""}`}>
        <Link to={"/home"} className={styles.navLink}>
          <Menu name={"Home"}></Menu>
        </Link>

        {user && (
          <Link
            to="/turns"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            <Menu name="Mis turnos" />
          </Link>
        )}
        <Link
          to={"/about"}
          className={styles.navLink}
          onClick={handleLinkClick}
        >
          <Menu name={"About"}></Menu>
        </Link>
        <Link
          to={"/contact"}
          className={styles.navLink}
          onClick={handleLinkClick}
        >
          <Menu name={"Contacto"}></Menu>
        </Link>

        {!user ? (
          <Link
            to="/login"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            <Menu name="Iniciar sesión" />
          </Link>
        ) : (
          <>
            <div className={styles.userSection}>
              <div className={styles.userInfo}>
                <span className={styles.greeting}>¡Hola!</span>
                <span className={styles.name}>{user.name.split(" ")[0]}</span>
                <Link onClick={handleLogout} className={styles.logoutLink}>
                  Cerrar sesión
                </Link>
              </div>
              <div className={styles.avatarContainer}>
                <img
                  src={
                    user.photo
                      ? `http://localhost:3000/uploads/${user.photo}`
                      : userAvatar
                  }
                  alt="Avatar usuario"
                  className={
                    user.photo ? styles.avatarImageFull : styles.avatarImage
                  }
                />
              </div>
            </div>
          </>
        )}
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
