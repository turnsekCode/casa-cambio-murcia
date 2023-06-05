import React, { useState } from "react";
import Comprar from "../ConversorDivisa/Comprar";
import styles from "./section_2.module.css";
import Vender from "../ConversorDivisa/Vender";

const SectionDos = () => {
  const [switched, setSwitched] = useState(null);
  return (
    <section className={styles.contendorSectionDos}>
      <div className={styles.contendorBloques}>
        <div className={styles.bloqueIzq}>
          <figure>
            <img src="/imagen_calc.png" alt="Logo Divisa" />
          </figure>
          <div className={styles.contenedorInfo}>
            <h2>Cambio de Divisas Murcia</h2>
            <p>
              Conoce el tipo de cambio en nuestras<br></br> casas de cambio de
              moneda en Murcia.
            </p>
          </div>
          <div className={styles.contenedorBotones}>
            <button
              onClick={() => {
                setSwitched(false);
              }}
              className={
                switched
                  ? `${styles.botonComprar}`
                  : `${styles.botonComprar} ${styles.botonActivo}`
              }
            >
              QUIERO EUROS
            </button>
            {/*<button
              className={
                switched
                  ? `${styles.botonVender} ${styles.botonActivo}`
                  : ` ${styles.botonVender}`
              }
              onClick={() => {
                setSwitched(true);
              }}
            >
              TENGO EUROS
            </button>*/}
          </div>
        </div>
        {switched ? <Vender /> : <Comprar />}
      </div>
    </section>
  );
};

export default SectionDos;
