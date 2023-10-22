import { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import { close, logo, menu, dark_logo, logo_small, logo_dark_small } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Update the theme state when the local storage changes
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const logoSrc = theme === "light" ? dark_logo : logo;
  const smallLogoSrc = theme === "light" ? logo_small : logo_dark_small;

  return (
    <nav className="w-full flex py-10 px-2 sm:px-10 justify-between items-center">
      <img src={logoSrc} alt="task" className="w-auto h-auto max-w-[300px] max-h-[160px] opacity-100 hidden sm:block" />
      <img src={smallLogoSrc} alt="task" className="w-[60px] h-[60px] opacity-100 sm:hidden" />

      <div>
        <ThemeButton className="px-20" />
      </div>

      <ul className="list-none md:flex hidden justify-end px-5 items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "dark:text-white text-black" : "dark:text-dimWhite text-gray-500"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.title === "Launch App" ? (
              <div>
                <a href="/dashboard">{nav.title}</a>
              </div>
            ) : nav.title === "GitHub" ? (
              <a href="https://github.com/chainspace-network">{nav.title}</a>
            ) : (
              <a href={`/${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gray-gradient absolute z-10 top-20 right-0 mx-4 mt-10 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title === "Launch App" ? (
                  <div>
                    <a href="/dashboard">{nav.title}</a>
                  </div>
                ) : nav.title === "GitHub" ? (
                  <a href="https://github.com/chainspace-network">{nav.title}</a>
                ) : (
                  <a href={`/${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
