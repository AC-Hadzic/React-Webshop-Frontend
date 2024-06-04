import React, {useEffect, useState } from "react";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light-mode");

    useEffect(() => {
        const savedThemeInStorage = localStorage.getItem("app-theme");

        // Provjera postoji li već tema u localStorage
        if (savedThemeInStorage) {
            const page = document.getElementById("page-wrap");
            setTheme(savedThemeInStorage == "dark-mode" ? "dark-mode" : "light-mode");
    
            // Postavi className na wrapper
            if (page) {
                page.classList = savedThemeInStorage == "dark-mode" ? "dark-mode" : "light-mode";
            }
        }
    }, []);
    
    const toggleTheme = () => {
        const page = document.getElementById("page-wrap");    
        
        // Postavlja temu i wrapper ClassName
        setTheme(theme == "light-mode" ? "dark-mode" : "light-mode");
        if (page) {
            page.classList == "light-mode" ? page.classList = "dark-mode" : page.classList = "light-mode"
        }

        // Invertirano da radi kako treba
        localStorage.setItem("app-theme", theme == "dark-mode" ? "light-mode" : "dark-mode");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };