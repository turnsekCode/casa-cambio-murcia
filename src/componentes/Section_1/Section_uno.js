import React from "react";
//import Image from "next/image";
import styles from "./section_uno.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-scroll";
import useScreenSize from "@/utilities/useScreenSize";

const Section_uno = () => {
  const { width } = useScreenSize();
  return (
    <section className={styles.contenedorSectionUno}>
      <div className={styles.bloqueIzq}>
        <h1>
          Casas de cambio en <span className={styles.linea}>Murcia</span>
        </h1>
        <p>
          Visita nuestro money exchange en Murcia y cambia dólares por euros o
          cualquier otra moneda al instante. Consigue el mejor tipo de cambio en
          nuestra oficina de cambio en Murcia.
        </p>
        <div className={styles.botones}>
          <Link
            to="contenedorMapa"
            smooth={true}
            offset={-110}
            spy={true}
            duration={500}
            title="texto"
            passive="true"
          >
            <LocationOnOutlinedIcon />
            encuentra tu tienda
          </Link>
          <a href="tel:900 373 629" title="Teléfono">
            llama gratis al 900 373 629
          </a>
        </div>
      </div>
      <div className={styles.bloqueDer}>
        {width <= 610 ? (
          <img
            src="/divisa-mobil.webp"
            alt="Casas de cambio murcia"
            className={styles.madridMobil}
            width={290}
            height={220}
          />
        ) : (
          <img
            src="/divisa.webp"
            alt="Casas de cambio murcia"
            className={styles.vector}
            width={480}
            height={364}
          />
        )}
      </div>
    </section>
  );
};

export default Section_uno;
