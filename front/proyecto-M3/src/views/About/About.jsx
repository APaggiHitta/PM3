import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.section}>
        <h1 className={styles.title}>SOBRE NOSOTROS</h1>
        <p className={styles.paragraph}>
          <strong>Amazing Amazonas Tours</strong> es una empresa de turismo de
          aventura ubicada en el corazón de la selva amazónica, en Manaos,
          Brasil. Nuestra misión es conectar a las personas con la majestuosidad
          del Amazonas, ofreciendo experiencias inolvidables que combinan
          naturaleza, cultura y adrenalina.
        </p>
        <p className={styles.paragraph}>
          Operamos excursiones en todos los países atravesados por el majestuoso
          río Amazonas: Brasil, Perú, Colombia, Bolivia, Venezuela, Ecuador,
          Guyana y Surinam. Nuestra presencia internacional nos permite ofrecer
          rutas únicas y auténticas en diversos tramos del río y la selva
          tropical.
        </p>
        <p className={styles.importantNote}>
          ⚠️ <strong>Importante:</strong> nuestras excursiones{" "}
          <strong>no se realizan los domingos</strong> para garantizar el
          descanso del equipo y el respeto por las comunidades locales.
        </p>
        <p className={styles.importantNote}>
          📅 <strong>A tener en cuenta:</strong> solo podrás agendar una
          actividad <strong>a partir de mañana</strong>. No es posible reservar
          actividades para el mismo día.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Nuestras Actividades</h2>
        <ul className={styles.list}>
          <li>
            <strong>🎣 Excursión de pesca:</strong> Aventura de pesca
            tradicional en afluentes del Amazonas, con guías locales que enseñan
            técnicas ancestrales. Ideal para principiantes y expertos.
          </li>
          <li>
            <strong>🌊 Rafting:</strong> Emoción pura descendiendo rápidos de la
            selva amazónica en zonas seguras, con equipos certificados y
            monitores profesionales.
          </li>
          <li>
            <strong>🛶 Canotaje:</strong> Navega entre manglares y afluentes
            tranquilos del Amazonas, descubriendo flora y fauna únicas desde el
            agua.
          </li>
          <li>
            <strong>🔥 Campamento:</strong> Vive una noche en la selva con
            nuestro equipo experto. Armado de campamento, fogón comunitario y
            relatos indígenas incluidos.
          </li>
          <li>
            <strong>🌙 Senderismo nocturno:</strong> Explora la selva de noche
            con linternas especiales, escuchando y observando la vida que se
            activa bajo las estrellas.
          </li>
          <li>
            <strong>🪶 Circuito indígena:</strong> Visita comunidades amazónicas
            para conocer su cultura, medicina ancestral, danza y gastronomía.
          </li>
          <li>
            <strong>🦜 Avistamiento de aves:</strong> Salidas al amanecer con
            binoculares y guías ornitólogos para observar especies exóticas y
            únicas del bioma amazónico.
          </li>
          <li>
            <strong>📷 Fotografía extrema:</strong> Excursiones diseñadas para
            fotógrafos en busca de los paisajes más remotos y salvajes del
            Amazonas.
          </li>
          <li>
            <strong>🛳️ Crucero Amazónico (5 días):</strong> Descubrí la magia
            del Amazonas desde una perspectiva única: a bordo de un confortable
            crucero. Durante cinco días, navegarás por paisajes impresionantes,
            visitarás comunidades ribereñas y vivirás puestas de sol
            inolvidables desde la cubierta. Incluye excursiones guiadas en
            selva, pesca de pirañas, observación de delfines rosados y
            experiencias gastronómicas con sabores locales. Todo mientras
            disfrutás de la tranquilidad de la selva desde el corazón del río.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Nuestro Equipo</h2>
        <p className={styles.paragraph}>
          Contamos con un equipo apasionado y altamente calificado:
        </p>
        <ul className={styles.list}>
          <li>👨‍🏫 João Pereira – Guía experto en pesca y vida silvestre</li>
          <li>🛶 Ana Torres – Instructora profesional de rafting y canotaje</li>
          <li>🔥 Marcos Lima – Coordinador de campamentos y supervivencia</li>
          <li>🌌 Natalia Rodríguez – Especialista en fauna nocturna</li>
          <li>🧕 Yara Maku – Puente cultural con comunidades indígenas</li>
          <li>🦉 Felipe Duarte – Ornitólogo certificado y guía de aves</li>
          <li>
            📸 Luiza Fernandes – Fotógrafa de naturaleza y guía de expediciones
            fotográficas
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Compromiso con la Naturaleza</h2>
        <ul className={styles.list}>
          <li>🌱 Sostenibilidad ambiental</li>
          <li>🛶 Turismo responsable</li>
          <li>🧭 Educación y conservación</li>
        </ul>
        <p className={styles.paragraph}>
          En Amazing Amazonas Tours, cada excursión es una oportunidad para
          aprender, respetar y proteger el Amazonas. ¡Gracias por acompañarnos
          en esta misión!
        </p>
      </section>
    </div>
  );
};

export default About;
