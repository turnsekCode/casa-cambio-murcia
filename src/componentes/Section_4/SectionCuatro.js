import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Murcia</span>
        </h2>
        <p>
          Tanto si vives en Murcia como si estás visitando su preciosa Catedral
          o la Plaza del Cardenal Belluga, tienes la suerte de tener una casa de
          cambio Quickgold para que cambiar divisa sea un proceso sencillo y
          rápido. Recuerda que en nuestra casa de cambio en Murcia realizamos
          mejoras en el tipo de cambio por cantidad. Indícanos tus necesidades
          y, sin compromiso, te asesoraremos y te ofreceremos el mejor tipo de
          cambio de la ciudad. Cambia moneda extranjera en Murcia de manera
          fácil y rápida.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-murcia.webp"
          alt="Cambiar Dólares a Euros murcia"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
