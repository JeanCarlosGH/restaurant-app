import "./styles.css";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import Available from "./components/ingredient/Available";
import Filter from "./components/ingredient/Filter";
import useIngredients from "./components/useIngredients";

export const App = () => {
  const { listaIngredientes, getData, agregarDatos, actualizarDatos } =
    useIngredients();

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [filteredCategory, setFilteredCategory] = useState("*"); //useState diferente
  const [available, setAvailable] = useState(true);

  function onclickHandler() {
    if (available) {
      setAvailable(false);
    } else {
      setAvailable(true);
    }
  }

  function mostrarForm() {
    if (document.getElementById("formulario")) {
      document.getElementById("formulario").classList = "";
    }
  }

  function ocultarForm() {
    if (document.getElementById("formulario")) {
      document.getElementById("formulario").classList = "hidden";
    }
  }

  const filteredIngredients = createIngredientList(filteredCategory);

  function createIngredientList(cat) {
    if (cat.toLowerCase() !== "*") {
      return listaIngredientes.filter(
        (ingrediente) =>
          ingrediente.categoria.toLowerCase() === filteredCategory.toLowerCase()
      );
    } else {
      return listaIngredientes;
    }
  }

  function filterChangeHandler(selectedCategory) {
    setFilteredCategory(selectedCategory);
  }

  const [datosParaEditar, setDatosParaEditar] = useState(null);

  return (
    <>
      <div className="main-container">
        <div className="wallet-amount">
          <div className="qr-code"></div>
          <h3>React</h3>
          <p className="total" dec="31">
            I’Kitchen
          </p>
          <button
            className="action-btn"
            onClick={onclickHandler}
            title="Cambiar de pestaña"
          >
            {available ? "No Disponibles" : "Disponibles"}
          </button>

          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              className="wave"
              d="M0,128L24,117.3C48,107,96,85,144,117.3C192,149,240,235,288,224C336,213,384,107,432,101.3C480,96,528,192,576,224C624,256,672,224,720,197.3C768,171,816,149,864,133.3C912,117,960,107,1008,101.3C1056,96,1104,96,1152,128C1200,160,1248,224,1296,240C1344,256,1392,224,1416,208L1440,192L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="wallet-details">
          <h2>Refrigerador</h2>
          <Filter
            selected={filteredCategory}
            onChangeFilter={filterChangeHandler}
          ></Filter>
          <button className="add-coin" onClick={mostrarForm}>
            Agregar nuevo Ingrediente
          </button>
        </div>
        <div>
          <Form
            ocultar={ocultarForm}
            agregarDatos={agregarDatos}
            setDatosParaEditar={setDatosParaEditar}
            actualizarDatos={actualizarDatos}
            datosParaEditar={datosParaEditar}
          />
        </div>
        <Available
          ingredientes={filteredIngredients}
          available={available}
          setDatosParaEditar={setDatosParaEditar}
          actualizarDatos={actualizarDatos}
          mostrarForm={mostrarForm}
          setAvailable={setAvailable}
        ></Available>
      </div>
    </>
  );
};
