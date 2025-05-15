// import { useEffect, useState } from "react";

// import Turn from "../../components/Turn/Turn";
// import styles from "./Turns.module.css";
// import axios from "axios";

// const Turns = () => {
//   const [turns, setTurns] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/turns/").then((res) => setTurns(res.data));
//   }, []);
//   return (
//     <div>
//       <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>

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

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Turn from "../../components/Turn/Turn";
import styles from "./Turns.module.css";
import axios from "axios";
import { UserContext } from "../../context/UserContext/UserContext";

const Turns = () => {
  const [turns, setTurns] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // ✅ Proteger la ruta si no hay usuario
  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (user) {
      axios
        .get("http://localhost:3000/turns/")
        .then((res) => setTurns(res.data));
    }
  }, [user]);

  return (
    <div>
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>ESTAS SON TUS PRÓXIMAS ACTIVIDADES</h2>
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
