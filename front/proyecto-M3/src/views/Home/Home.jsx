import { useEffect, useState } from "react";
import ActivityInfo from "../../components/ActivityInfo/ActivityInfo";
import CoverImage from "../../components/CoverImage/CoverImage";
import activityInfo from "../../helpers/activityInfo";
import styles from "./Home.module.css";

const Home = () => {
  const [activities, setActivities] = useState(activityInfo);

  return (
    <div>
      <CoverImage />
      <h1 className={styles.title}>VACACIONES Y AVENTURAS EN EL AMAZONAS</h1>
      <h2 className={styles.subtitle}>
        RESERVA TU PRÓXIMA EXPERIENCIA CON NOSOTROS
      </h2>
      <div className={styles.activityInfoContainer}>
        {activities.map((activity) => (
          <ActivityInfo
            key={activity.id}
            image={activity.image}
            price={activity.price}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
