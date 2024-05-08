import React, { useEffect, useState } from "react";
import { dark1, dark2 } from "../assets";

const ThemeButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Store the theme preference in local storage
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <button onClick={handleThemeSwitch} className="">
            <img src={dark1} alt={theme === "dark" ? "Light Logo" : "Dark Logo"} className="w-[28px] dark:bg-gray-300 rounded-xl"/>
        </button>
    )
}

export default ThemeButton;
