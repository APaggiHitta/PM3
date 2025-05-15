import { useEffect, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Turn from "../../components/Turn/Turn";
import AddTurn from "../../components/AddTurn/AddTurn";
import styles from "./Turns.module.css";

import { UserContext } from "../../context/UserContext/UserContext";
import { TurnsContext } from "../../context/TurnsContext/TurnsContext";

const Turns = () => {
  const { user } = useContext(UserContext);
  const { turns, setTurns } = useContext(TurnsContext);
  const navigate = useNavigate();

  // Redirige si no hay usuario
  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  // Carga turnos del usuario
  const fetchTurns = useCallback(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/turns/user/${user.id}`)
        .then((res) => setTurns(res.data))
        .catch((err) => console.error("Error cargando turnos:", err));
    }
  }, [user, setTurns]);

  useEffect(() => {
    fetchTurns();
  }, [fetchTurns]);

  return (
    <div>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <AddTurn refreshTurns={fetchTurns} />
      <h2 className={styles.subtitle}>ESTAS SON TUS PRÓXIMAS ACTIVIDADES</h2>

      {turns.length === 0 && (
        <p className={styles.noTurnsMessage}>
          Aún no has agendado ninguna actividad. ¡Explora nuestras aventuras y
          programá tu primera experiencia inolvidable en la selva amazónica!
        </p>
      )}

      <div className={styles.turnsContainer}>
        {turns.map((turn) => (
          <div className={styles.turnCard} key={turn.id}>
            <Turn
              id={turn.id} // importante para luego cancelar
              description={turn.activity.name}
              date={turn.date}
              time={turn.time}
              status={turn.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turns;
