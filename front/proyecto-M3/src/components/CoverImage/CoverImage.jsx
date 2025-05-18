import { useEffect, useState } from "react";
import styles from "./CoverImage.module.css";
import cover1 from "../../assets/img/caratula1.jpg";
import cover2 from "../../assets/img/caratula2.webp";
import cover3 from "../../assets/img/caratula3.jpg";
import cover4 from "../../assets/img/caratula4.jpeg";
import cover5 from "../../assets/img/caratula5.jpeg";
import cover6 from "../../assets/img/caratula6.avif";
import cover7 from "../../assets/img/caratula7.jpg";

import logoGoogle from "../../assets/img/brand-google.svg";
import logoTripAdvisor from "../../assets/img/brand-tripadvisor.svg";

const images = [cover1, cover2, cover3, cover4, cover5, cover6, cover7];

const CoverImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Carátula ${index + 1}`}
          className={`${styles.image} ${
            index === currentIndex ? styles.active : ""
          }`}
        />
      ))}

      <div className={styles.logos}>
        <div className={styles.logoWithText}>
          <div className={styles.logoCircle}>
            <img src={logoGoogle} alt="Google" />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.ratingText}>5/5 ⭐️⭐️⭐️⭐️⭐️</p>
            <p className={styles.reviewText}>Basado en 600+ reviews</p>
          </div>
        </div>
        <div className={styles.logoWithText}>
          <div className={styles.logoCircle}>
            <img src={logoTripAdvisor} alt="TripAdvisor" />
          </div>
          <div className={styles.textContainer}>
            <p className={styles.ratingText}>4.9/5 ⭐️⭐️⭐️⭐️⭐️</p>
            <p className={styles.reviewText}>Basado en 1300+ reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
