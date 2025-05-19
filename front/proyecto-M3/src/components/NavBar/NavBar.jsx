import styles from "./NavBar.module.css";
import logoAAT from "../../assets/img/logoAAT.png";
import logoHamburguer from "../../assets/img/logoHamburguer.svg";
import userAvatar from "../../assets/img/userAvatar.svg";
import Menu from "../Menus/Menu";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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
    logout();
    navigate("/home");
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
        <NavLink
          to={"/home"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
          onClick={handleLinkClick}
        >
          <Menu name={"Home"}></Menu>
        </NavLink>

        {user && (
          <NavLink
            to="/turns"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleLinkClick}
          >
            <Menu name="Mi agenda" />
          </NavLink>
        )}
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
          onClick={handleLinkClick}
        >
          <Menu name={"About"}></Menu>
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.active : ""}`
          }
          onClick={handleLinkClick}
        >
          <Menu name={"Contacto"}></Menu>
        </NavLink>

        {!user ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleLinkClick}
          >
            <Menu name="Iniciar sesión" />
          </NavLink>
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
