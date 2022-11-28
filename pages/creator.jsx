import Navbar from "../components/navbar";
import CreatorProblem from "../components/createrProblem";
import React, { useState } from "react";

export default function Creator() {
	const [success, setSuccess] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const color = darkMode
		? "bg-gradient-to-r from-cyan-400 to-blue-400"
		: "bg-stone-750";

	const toggle = () => {
		if (darkMode == true) setDarkMode(false);
		else setDarkMode(true);
	};

	return (
		<div className={`${color}`}>
			<Navbar />
			<div className="mt-20 grid grid-cols-9 grid-rows-1">
				<button onClick={toggle}>CLICK</button>
				<div className="col-span-7 col-start-2">
					<CreatorProblem darkMode={darkMode} />
				</div>
			</div>
		</div>
	);
}
