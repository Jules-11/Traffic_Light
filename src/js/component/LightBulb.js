import React, { useState } from "react";

const LightBulb = (props) => {
	const lightBulbStyle = {
		height: "50px",
		width: "50px",
		borderRadius: "50%",
		border: "none",
		marginLeft: "5px",
		marginTop: "5px",
		marginBottom: "0px",
		backgroundColor: props.color,
	};

	return (
		<button
			type="button"
			style={lightBulbStyle}
			onClick={props.onClick}
			className={props.className}></button>
	);
};

export default LightBulb;
