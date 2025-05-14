import { useEffect, useState } from "react";
import myTurns from "../../helpers/myTurns";
import Turn from "../../components/Turn/Turn";
import styles from "./Turns.module.css";
import axios from "axios";

const Turns = () => {
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/turns/").then((res) => setTurns(res.data));
  }, []);
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turns;
