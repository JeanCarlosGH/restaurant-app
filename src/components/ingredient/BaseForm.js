import React from "react";

function BaseForm(props) {

	const {nombre, cantidad, unidad, categoria} = props.ingrediente;

	function editIngrediente() {
		props.setDatosParaEditar(props.ingrediente)
		props.mostrarForm();
		props.setAvailable(true);

	}

	function editIngredienteNoDisp() {
		props.setDatosParaEditar(props.ingrediente)
		props.mostrarForm();
		props.setAvailable(false);

	}

	async function setCantidad() {
		let ingrediente = {
			nombre: nombre,
			cantidad: 0,
			unidad: unidad,
			categoria: categoria
		}
		await props.actualizarDatos(ingrediente);
	}

	return (
		<div className="BTC">
            <h4>{nombre}</h4>
            <p className="value">{cantidad } {unidad}</p>
            <p className="amount">{categoria}</p>
			<div style= {{width:"40px"}} onClick={props.available ? setCantidad : editIngredienteNoDisp }>
				{props.icon}
				
			</div>
			<button onClick={ editIngrediente }>Editar</button>
        </div>
	);
}

export default BaseForm;
