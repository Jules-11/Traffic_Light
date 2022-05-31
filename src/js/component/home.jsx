import React, { useState } from "react";
import LightBulb from "./LightBulb";
import Navbar from "./Navbar";
import Footer from "./Footer";
import motoImg from "../../img/PngItem_3338773.png";
//create your first component
const Home = () => {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	const redLight = () => {
		setRed(true);
		setYellow(false);
		setGreen(false);
	};

	const yellowLight = () => {
		setRed(false);
		setYellow(true);
		setGreen(false);
	};

	const greenLight = () => {
		setRed(false);
		setYellow(false);
		setGreen(true);
	};

	const automaticSwitch = () => {
		greenLight();
		setTimeout(yellowLight, 2000);
		setTimeout(redLight, 3000);
	};

	const trafficLightBox = {
		height: "170px",
		width: "60px",
		backgroundColor: "black",
		borderRadius: "8px",
	};

	const trafficLightHandle = {
		height: "50px",
		width: "0px",
		backgroundColor: "black",
	};
	const sky = {
		backgroundColor: "#87ceeb",
	};
	const sky2 = {
		backgroundColor: "#87ceeb",
		height: "70px",
	};
	const grass = {
		backgroundColor: "#567d46",
		height: "375px",
		transformLeft: "skewX(-5deg)",
	};
	const bike = {
		width: "100%",
	};

	const road = {
		backgroundColor: "grey",
		borderLeft: "70px solid #C2B280",
		borderRight: "70px solid #C2B280",
	};
	const roadMargin = {
		marginBottom: "39px",
	};

	return (
		<div>
			<Navbar automaticSwitch={automaticSwitch} />
			<div className="" style={sky}>
				<div className="container" style={trafficLightHandle}></div>
				<div className="container" style={trafficLightBox}>
					<div className="row">
						<LightBulb
							className={red ? "turnedOn" : null}
							onClick={redLight}
							color={" #bb1e10"}
						/>
					</div>
					<div className="row">
						<LightBulb
							onClick={yellowLight}
							color={"#f7b500"}
							className={yellow ? "turnedOn" : null}
						/>
					</div>
					<div className="row">
						<LightBulb
							onClick={greenLight}
							color={"#32A431"}
							className={green ? "turnedOn" : null}
						/>
					</div>
				</div>
			</div>
			<div style={sky2}></div>
			<div className="row gx-0" style={roadMargin}>
				<div className="col-4" style={grass}></div>
				<div className="col-4 d-flex align-items-end" style={road}>
					<img src={motoImg} style={bike}></img>
				</div>
				<div className="col-4" style={grass}></div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
