import ActivityInfo from "../../components/ActivityInfo/ActivityInfo";
import CoverImage from "../../components/CoverImage/CoverImage";
import activityInfo from "../../helpers/activityInfo";
import styles from "./Home.module.css";

const Home = () => {
  const title = "VACACIONES Y AVENTURAS EN EL AMAZONAS";
  const subtitle = "RESERVA TU PRÓXIMA EXPERIENCIA CON NOSOTROS";

  return (
    <div>
      <CoverImage />
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <div className={styles.activityInfoContainer}>
        {activityInfo.map((activity) => (
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
