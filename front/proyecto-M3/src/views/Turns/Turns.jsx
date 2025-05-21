import { useEffect, useContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTurnsByUserId } from "../../services/turnsService";

import Turn from "../../components/Turn/Turn";
import AddTurn from "../../components/AddTurn/AddTurn";
import styles from "./Turns.module.css";

import { UserContext } from "../../context/UserContext/UserContext";
import { TurnsContext } from "../../context/TurnsContext/TurnsContext";

const Turns = () => {
  const { user } = useContext(UserContext);
  const { turns, setTurns } = useContext(TurnsContext);
  const navigate = useNavigate();

  const [filter, setFilter] = useState("Todas");

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const fetchTurns = useCallback(() => {
    if (user) {
      getTurnsByUserId(user.id)
        .then((data) => setTurns(data))
        .catch((err) => console.error("Error cargando turnos:", err));
    }
  }, [user, setTurns]);

  useEffect(() => {
    fetchTurns();
  }, [fetchTurns]);

  const filteredTurns = turns.filter((turn) => {
    const [year, month, day] = turn.date.split("-").map(Number);
    const activityDate = new Date(year, month - 1, day);

    const today = new Date();
    const todayAtMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    if (filter === "Todas") return true;

    if (filter === "Activas") {
      return turn.status === "active" && activityDate >= todayAtMidnight;
    }

    if (filter === "Canceladas") return turn.status === "cancelled";

    if (filter === "Realizadas") {
      return turn.status === "active" && activityDate < todayAtMidnight;
    }

    return true;
  });

  return (
    <div>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <AddTurn refreshTurns={fetchTurns} />
      <h2 className={styles.subtitle}>ESTAS SON TUS PRÓXIMAS ACTIVIDADES</h2>

      {turns.length === 0 ? (
        <p className={styles.noTurnsMessage}>
          Aún no has agendado ninguna actividad. ¡Explora nuestras aventuras y
          programá tu primera experiencia inolvidable en la selva amazónica!
        </p>
      ) : (
        <>
          <div className={styles.filterContainer}>
            {["Todas", "Activas", "Canceladas", "Realizadas"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={
                  filter === type
                    ? `${styles.filterButton} ${styles.active}`
                    : styles.filterButton
                }
              >
                {type}
              </button>
            ))}
          </div>

          {filteredTurns.length === 0 && (
            <p className={styles.noTurnsMessage}>
              No hay actividades {filter.toLowerCase()} por el momento.
            </p>
          )}

          <div className={styles.turnsContainer}>
            {filteredTurns.map((turn) => (
              <div className={styles.turnCard} key={turn.id}>
                <Turn
                  id={turn.id}
                  description={turn.activity.name}
                  date={turn.date}
                  time={turn.time}
                  status={turn.status}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Turns;
