import { createContext, useState } from "react";
export const ThemeContext = createContext({ toggle: () => {}, mode: "light" });

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState("light");

	const toggle = () => {
		setMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ toggle, mode }}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
