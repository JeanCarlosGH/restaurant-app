import React from "react";
import BaseForm from "./BaseForm";
//import Ingrediente from "./Ingrediente";

function Available(props) {
	let ingredientList = [];
	let icon = (
		props.available ? 
		<svg className="card__clock" viewBox="0 0 448 512" style= {{cursor:"pointer"}} title="Asignar 0">
			<path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
		</svg>
		: 
		<svg className="card__clock" viewBox="0 0 448 512" style= {{cursor:"pointer"}} title="Asignar Cantidad">
			<path d="M163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128H416L394.8 467c-1.6 25.3-22.6 45-47.9 45H101.1c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V408c0 13.3 10.7 24 24 24s24-10.7 24-24V273.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z" />
		</svg>
	);

	const availableIng = props.ingredientes.filter(
		
		props.available ? (ingrediente) => ingrediente.cantidad > 0 : (ingrediente) => ingrediente.cantidad === 0
	);

	availableIng.forEach((ingrediente) => {
		ingredientList.push(
			<BaseForm
				key={ingrediente.nombre}
				// nombre={ingrediente.nombre}
				// categoria={ingrediente.categoria}
				// cantidad={ingrediente.cantidad}
				// unidad={ingrediente.unidad}
				icon={icon}
				ingrediente={ingrediente}
				setDatosParaEditar={props.setDatosParaEditar}
         		actualizarDatos={props.actualizarDatos}
				mostrarForm={props.mostrarForm}
				available={props.available}
				setAvailable={props.setAvailable}
			></BaseForm>
		);
	});
	return (
		<div className="cryptos">
          { ingredientList }
        </div>
	);
}

export default Available;