import React, { useState, useEffect } from "react";
import styles from "./estilosConversor.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ImportExportIcon from "@mui/icons-material/ImportExport";
//import { useFetchData } from "../../utilities/DataTiendas";

const Comprar = () => {
  const nombreCiudad = "murcia";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    fetch(`https://quickgold.es/archivos-cache/Fixing${nombreCiudad}.txt`, {
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response?.result?.Tarifas?.Divisas_Compra.reverse());
        setLoading(true);
      });
  }, []);
  //const { data, loading } = useFetchData();
  //const dataCompras = datos?.result?.Tarifas?.Divisas_Compra;
  //const dataReverse = dataCompras?.reverse();
  const precioLibra = data[0]?.Productos[0].Precio / 1000;
  const precioDolar = data[1]?.Productos[0].Precio / 1000;
  const [valorMoneda, setValorMoneda] = useState("0");
  const [DataAcronimo, setAcronimo] = useState("");
  //const [DataNombre, setDataNombre] = useState("");
  const [valorInput, setValorInput] = useState("");
  const [selectDivisa, setSelectDivisa] = useState(true);
  const [switched, setSwitched] = useState(null);
  const [select, setSelect] = useState(null);
  const precioDividido = valorMoneda / 1000;
  const precioDividido2 = 1 / precioDividido;
  const valorFinal = valorInput * precioDividido;
  const valorFinal2 = valorInput / precioDividido;
  const captureCodigo = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    //setDataNombre(e.target.dataset.nombre);
    setValorMoneda(e.target.dataset.precio);
  };
  const MonedaSeleccionada = () => {
    setSelectDivisa(false);
  };
  const captureHabitual = (e) => {
    setAcronimo(e.target.dataset.acronimo);
    setValorMoneda(e.target.dataset.precio);
    setSelectDivisa(false);
  }; /*
  const seleccion = () => {
    setSelectOpen(true);
  };*/

  return (
    <div className={styles.bloqueDer}>
      <div className={styles.bloqueDivHabituales}>
        <div className={styles.bloqueTituloSuperior}>
          <h3>
            Conversor <span></span> de divisa
          </h3>
          <p className={styles.tituloDivisaHabitual}>Divisas más habituales:</p>
        </div>

        <div className={styles.divisasHabituales}>
          <div
            className={styles.dolar}
            onClick={(e) => {
              captureHabitual(e);
              setSelect(false);
            }}
            data-acronimo={data[1]?.Productos[0]?.Acronimo}
            data-precio={data[1]?.Productos[0]?.Precio}
          >
            <div
              className={styles.imgMoneda}
              onClick={(e) => {
                captureHabitual(e);
                setSelect(false);
              }}
              data-acronimo={data[1]?.Productos[0]?.Acronimo}
              data-precio={data[1]?.Productos[0]?.Precio}
            >
              <img
                src="/banderaUSA.png"
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[1]?.Productos[0]?.Acronimo}
                data-precio={data[1]?.Productos[0]?.Precio}
                alt={data[1]?.Productos[0]?.Acronimo}
              />
              <span
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[1]?.Productos[0]?.Acronimo}
                data-precio={data[1]?.Productos[0]?.Precio}
              >
                USD
              </span>
            </div>
            <div className={styles.nombreMoneda}>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[1]?.Productos[0]?.Acronimo}
                data-precio={data[1]?.Productos[0]?.Precio}
              >
                Dólar USA
              </p>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[1]?.Productos[0]?.Acronimo}
                data-precio={data[1]?.Productos[0]?.Precio}
              >
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                    setSelect(false);
                  }}
                  data-acronimo={data[1]?.Productos[0]?.Acronimo}
                  data-precio={data[1]?.Productos[0]?.Precio}
                >
                  {loading ? precioDolar.toFixed(4) : "Cargando..."}€
                </span>
              </p>
            </div>
          </div>
          <div
            className={styles.libra}
            onClick={(e) => {
              captureHabitual(e);
              setSelect(false);
            }}
            data-acronimo={data[0]?.Productos[0]?.Acronimo}
            data-precio={data[0]?.Productos[0]?.Precio}
          >
            <div
              className={styles.imgMoneda}
              onClick={(e) => {
                captureHabitual(e);
                setSelect(false);
              }}
              data-acronimo={data[0]?.Productos[0]?.Acronimo}
              data-precio={data[0]?.Productos[0]?.Precio}
            >
              <img
                src="/banderaGBP.png"
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[0]?.Productos[0]?.Acronimo}
                data-precio={data[0]?.Productos[0]?.Precio}
                alt={data[0]?.Productos[0]?.Acronimo}
              />
              <span
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[0]?.Productos[0]?.Acronimo}
                data-precio={data[0]?.Productos[0]?.Precio}
              >
                GBP
              </span>
            </div>
            <div className={styles.nombreMoneda}>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[0]?.Productos[0]?.Acronimo}
                data-precio={data[0]?.Productos[0]?.Precio}
              >
                Libra Esterlina
              </p>
              <p
                onClick={(e) => {
                  captureHabitual(e);
                  setSelect(false);
                }}
                data-acronimo={data[0]?.Productos[0]?.Acronimo}
                data-precio={data[0]?.Productos[0]?.Precio}
              >
                <span
                  onClick={(e) => {
                    captureHabitual(e);
                    setSelect(false);
                  }}
                  data-acronimo={data[0]?.Productos[0]?.Acronimo}
                  data-precio={data[0]?.Productos[0]?.Precio}
                >
                  {loading ? precioLibra.toFixed(4) : "Cargando..."}€
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contenedorInputSuperior}>
        <div className={styles.bloqueIzqInput}>
          <div
            className={styles.select}
            onClick={() => {
              setSelect(!select);
            }}
          >
            {selectDivisa ? (
              <>
                <p>Seleccione Divisa</p>
                <KeyboardArrowDownIcon />
              </>
            ) : (
              <>
                {DataAcronimo} <KeyboardArrowDownIcon />
              </>
            )}
            <div
              className={
                select
                  ? `${styles.select_monedas} ${styles.select_activo}`
                  : `${styles.select_monedas}`
              }
            >
              {data
                ?.filter(
                  (currency) =>
                    currency.Name !== "HRK" &&
                    currency.Name !== "DKK" &&
                    currency.Name !== "RUB" &&
                    currency.Name !== "NOK"
                )
                .map((data, i) => (
                  <div
                    key={i}
                    className={styles.contenedor_list}
                    data-acronimo={data?.Productos[0].Acronimo}
                    data-precio={data?.Productos[0].Precio}
                    onClick={(e) => {
                      captureCodigo(e);
                      MonedaSeleccionada();
                    }}
                  >
                    <div className={styles.bandera}>
                      <img
                        src={`/${data?.Productos[0].Acronimo}.png`}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                        alt={data?.Productos[0].Acronimo}
                      />
                    </div>
                    <div className={styles.moneda}>
                      <p
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                      >
                        {data?.Productos[0].Acronimo}
                      </p>
                      <span
                        className={styles.nombre}
                        data-acronimo={data?.Productos[0].Acronimo}
                        data-precio={data?.Productos[0].Precio}
                      >
                        {data?.Productos[0].Nombre}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  style={{ border: "none" }}
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  value={valorFinal2.toFixed(2)}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="0.00"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //readOnly
                  //id="input-izquierdo"
                  //ref={refInput1}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>{DataAcronimo}</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1{DataAcronimo} = {precioDividido.toFixed(4)}EUR
            </p>
          )}
        </div>
      </div>
      <div className={styles.botonSwith}>
        <ImportExportIcon
          onClick={(e) => {
            setSwitched(!switched);
          }}
        />
      </div>
      <div className={styles.contenedorInputInferior}>
        {selectDivisa ? (
          <span>{DataAcronimo}</span>
        ) : (
          <div className={styles.monedaInferior}>EUR</div>
        )}
        <div className={styles.bloqueDerInput}>
          {selectDivisa ? (
            <PowerInputIcon />
          ) : (
            <div className={styles.contenedorInput}>
              {switched ? (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  className={styles.inputInferior}
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  //value={valorFinal.toFixed(2)}
                  onChange={(event) => setValorInput(event.target.value)}
                />
              ) : (
                <input
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Cantidad"
                  inputMode="numeric"
                  //id="input-derecho"
                  //ref={refInput2}
                  //onChange={calcularCambio}
                  value={valorFinal.toFixed(2)}
                  readOnly
                  style={{ border: "none" }}
                  //onChange={(event) => setValorInput(event.target.value)}
                />
              )}
              <span>EUR</span>
            </div>
          )}
          {selectDivisa ? (
            <p></p>
          ) : (
            <p>
              1EUR = {precioDividido2.toFixed(4)}
              {DataAcronimo}
            </p>
          )}
        </div>
      </div>
      <a className={styles.botonLlamarTienda} href="tel:900 373 629">
        LLAMAR A TIENDA
      </a>
    </div>
  );
};

export default Comprar;
