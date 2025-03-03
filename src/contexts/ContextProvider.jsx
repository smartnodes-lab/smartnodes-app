import React, { createContext, useContext, useState, useEffect } from "react";

const StateContext = createContext();

export const useTheme = () => {
    return useContext(StateContext);
}

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
} 

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark" );

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                theme,
                handleThemeSwitch
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);