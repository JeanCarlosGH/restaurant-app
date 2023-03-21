import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      unidad: "none",
      categoria: "none",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    props.datosParaEditar !== null
      ? await props.actualizarDatos(data)
      : await props.agregarDatos(data);
    e.target.reset();
    props.ocultar();
  };

  useEffect(() => {
    if (props.datosParaEditar) {
      setValue("nombre", props.datosParaEditar.nombre);
      setValue("cantidad", props.datosParaEditar.cantidad);
      setValue("unidad", props.datosParaEditar.unidad);
      setValue("categoria", props.datosParaEditar.categoria);
      // if (props.disp) {
      // 	document.getElementById("nombre").disabled = true;
      // } else {
      // 	document.getElementById("nombre").disabled = true;
      // 	document.getElementById("descripcion").disabled = true;
      // 	document.getElementById("categoria").disabled = true;
      // }
    }
  }, [props.datosParaEditar, setValue]);

  return (
    <div className="hidden" id="formulario">
      <h2>Añadir Productos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p role="alert">El campo Nombre es requerido</p>
          )}
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            {...register("cantidad", {
              required: true,
            })}
          />
          {errors.cantidad?.type === "required" && (
            <p>El campo Cantidad es requerido</p>
          )}
        </div>
        <div>
          <label>Unidad de Medida</label>
          <select {...register("unidad")}>
            <option value="Onzas">Onzas</option>
            <option value="Gramos">Gramos</option>
            <option value="Kilogramos">Kilogramos</option>
            <option value="Piezas">Piezas</option>
            <option value="Litros">Litros</option>
            <option value="Mililitros">Mililitros</option>
          </select>
        </div>
        <div>
          <label>Categoría</label>
          <select
            {...register("categoria", {
              required: true,
            })}
          >
            <option value="Carbohidratos">Carbohidratos</option>
            <option value="Proteína">Proteína</option>
            <option value="Lácteos">Lácteos</option>
            <option value="Dulces">Dulces</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Aceites">Aceites</option>
            <option value="Especias">Especias</option>
          </select>
          {errors.categoria?.type === "required" && (
            <p>El campo Categoria es requerido</p>
          )}
        </div>
        <input type="submit" value="Agregar"></input>
        <button onClick={props.ocultar}>Cancelar</button>
      </form>
    </div>
  );
};

export default Form;
