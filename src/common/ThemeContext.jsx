import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to manage the theme and persist it in localStorage
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Define the toggleTheme function
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
