import { useState } from "react";

const useIngredients = () => {
  let ingredientes = [
    {
      nombre: "Mango",
      cantidad: 6,
      categoria: "Frutas y Verduras",
      unidad: "Kilogramos",
    },
    {
      nombre: "Carne Roja",
      cantidad: 8,
      categoria: "Proteína",
      unidad: "Kilogramos",
    },
    {
      nombre: "Coca Cola",
      cantidad: 3,
      categoria: "Bebidas",
      unidad: "Litros",
    },
    {
      nombre: "Sidral Mundet",
      cantidad: 7,
      categoria: "Bebidas",
      unidad: "Litros",
    },
    {
      nombre: "Queso",
      cantidad: 4,
      categoria: "Lácteos",
      unidad: "Piezas",
    },
    {
      nombre: "7Up",
      cantidad: 0,
      categoria: "Bebidas",
      unidad: "Litros",
    },
    {
      nombre: "Nutrioli",
      cantidad: 0,
      categoria: "Aceites",
      unidad: "Litros",
    },
  ];

  const [listaIngredientes, setListaIngredientes] = useState([]);

  function getData() {
    setListaIngredientes(ingredientes);
  }

  function agregarDatos(flag) {
    setListaIngredientes([...listaIngredientes, flag]);
  }

  const actualizarDatos = (data) => {
    let newData = [];
    listaIngredientes.forEach((el) =>
      el.nombre.toString().toLowerCase() ===
      data.nombre.toString().toLowerCase()
        ? newData.push(data)
        : newData.push(el)
    );

    // let newData = filteredIngredients.map((el) => (el.nombre.toString().toLowerCase() === data.nombre.toString().toLowerCase() ? data : el));
    setListaIngredientes(newData);
    //setDatosParaEditar(null);
  };

  return { listaIngredientes, getData, agregarDatos, actualizarDatos };
};

export default useIngredients;
