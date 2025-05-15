// import { useEffect, useState, useContext, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// import Turn from "../../components/Turn/Turn";
// import styles from "./Turns.module.css";
// import axios from "axios";
// import { UserContext } from "../../context/UserContext/UserContext";
// import AddTurn from "../../components/AddTurn/AddTurn";

// const Turns = () => {
//   const [turns, setTurns] = useState([]);
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/home");
//     }
//   }, [user, navigate]);

//   const fetchTurns = useCallback(() => {
//     if (user) {
//       axios
//         .get(`http://localhost:3000/turns/user/${user.id}`)
//         .then((res) => setTurns(res.data))
//         .catch((err) => console.error("Error cargando turnos:", err));
//     }
//   }, [user]);

//   useEffect(() => {
//     fetchTurns();
//   }, [fetchTurns]);

//   return (
//     <div>
//       <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
//       <AddTurn refreshTurns={fetchTurns} />
//       <h2 className={styles.subtitle}>ESTAS SON TUS PRÓXIMAS ACTIVIDADES</h2>
//       <div className={styles.turnsContainer}>
//         {turns.map((turn) => (
//           <div className={styles.turnCard} key={turn.id}>
//             <Turn
//               description={turn.activity.name}
//               date={turn.date}
//               time={turn.time}
//               status={turn.status}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Turns;

import { useEffect, useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Turn from "../../components/Turn/Turn";
import styles from "./Turns.module.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext/UserContext";
import AddTurn from "../../components/AddTurn/AddTurn";

const Turns = () => {
  const [turns, setTurns] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  const fetchTurns = useCallback(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/turns/user/${user.id}`)
        .then((res) => setTurns(res.data))
        .catch((err) => console.error("Error cargando turnos:", err));
    }
  }, [user]);

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
