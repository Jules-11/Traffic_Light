import React from "react";

const Navbar = (props) => {
	let navStyle = {
		fontFamily: "system-ui",
	};
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-black"
			style={navStyle}>
			<div className="container-fluid px-4">
				<a className="navbar-brand" href="#">
					Traffic Light
				</a>
			</div>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse px-4"
				id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a
							className="nav-link text-secondary"
							aria-current="page"
							href="#">
							Three
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							Two
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link text-secondary" href="#">
							One
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link active text-white"
							href="#"
							onClick={props.automaticSwitch}>
							GO!
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
