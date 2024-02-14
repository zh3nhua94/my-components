import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import "./darkModeToggle.css";

const DarkModeToggle = () => {
	const { toggle, mode } = useContext(ThemeContext);
	return (
		<div
			className="darkmode-toggle-container"
			onClick={toggle}
		>
			<div className="icon">🌙</div>
			<div className="icon">🔆</div>
			<div
				className="ball"
				style={mode === "light" ? { right: "calc(100% - 20px)" } : { right: "2px" }}
			></div>
		</div>
	);
};

export default DarkModeToggle;
