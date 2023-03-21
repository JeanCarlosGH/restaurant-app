import React from "react";

function Filter(props) {

      const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };

	return (
		<select value={props.selected} onChange={dropdownChangeHandler}>
			<option value="*">Todos</option>
			<option value="Carbohidratos">Carbohidratos</option>,
			<option value="Proteína">Proteína</option>
			<option value="Lácteos">Lácteos</option>
			<option value="Dulces">Dulces</option>
			<option value="Frutas y verduras">Frutas y verduras</option>
			<option value="Bebidas">Bebidas</option>
			<option value="Aceites">Aceites</option>
			<option value="Especias">Especias</option>
		</select>
	);
}

export default Filter;
