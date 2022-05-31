import React from "react";

const Footer = () => {
	let footStyle = {
		fontFamily: "system-ui",
	};
	return (
		<div className="bg-black" style={footStyle}>
			<div className="p-2 bg-black text-white text-center fixed-bottom">
				<span>Made with ❤️ by </span>
				<a
					href="https://github.com/Jules-11"
					target="_blank"
					className="text-white">
					Julien Galeuzzi
				</a>
			</div>
		</div>
	);
};

export default Footer;
