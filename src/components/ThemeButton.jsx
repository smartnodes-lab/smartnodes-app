import React, { useEffect, useState } from "react";

const ThemeButton = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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
            {theme === "dark" ? <p>Light</p> : <p>Dark</p>}
        </button>
    )
}

export default ThemeButton;
