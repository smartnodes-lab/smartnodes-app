import { useState, useEffect } from "react";
import ThemeButton from "./ThemeButton";
import { close, logo, menu, dark_logo, logo_small, logo_dark_small } from "../assets";
import { navLinks } from "../constants";
import { HiOutlineMenu } from 'react-icons/hi';
import { useStateContext } from "../contexts/contextProvider";

const NavButton = ({ title, customFunc, icon }) => {

  return (
    <button
      type="button"
      onClick={() => customFunc()}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  )
}

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const { activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "dark");
    };

    window.addEventListener("storage", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const logoSrc = theme === "light" ? dark_logo : logo;
  const smallLogoSrc = theme === "light" ? logo_small : logo_dark_small;
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <nav className="w-full flex z-20 py-10 px-5 ml-1 md:ml-5 justify-between items-center" style={{ maxWidth: "1440px", margin: "0 auto" }}>
    {/* Existing navbar content */}
      {/* {!activeMenu && (
        <div className="flex flex-row">
          <NavButton 
            title="Menu"
            customFunc={handleActiveMenu} 
            icon={<HiOutlineMenu />}
            className="absolute justify-start" 
          /> */}
      {!activeMenu ? (
        <div 
          className="flex flex-row bg-gray-300 dark:bg-gray-500 rounded-xl px-3 py-0" 
          style={{zIndex: 100000}}
          onClick={() => setActiveMenu(!activeMenu)} 
        >
          <img src={logoSrc} alt="task" className="w-auto h-auto max-w-[350px] max-h-[160px] opacity-100 hidden md:block" />
          <img src={smallLogoSrc} alt="task" className="w-[70px] h-[70px] opacity-100 md:hidden my-1" />
        </div>
      ) : (
        <div></div>
      )}
      
      <ul className="list-none md:flex hidden justify-end px-5 items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "dark:text-white text-black" : "dark:text-dimWhite text-gray-500"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
            style={{zIndex: 10000}}
          >
            {nav.title === "GitHub" ? (
              <a href="https://github.com/smartnodes-lab">{nav.title}</a>
            ) : nav.title === "tensorlink" ? (
              <a href="/tensorlink">{nav.title}</a>
            ) : (
              <a href={`/${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
        <div className="ml-5" style={{zIndex: 100000}}>
          <ThemeButton className="px-20" />
        </div>
      </ul>

      <div className="md:hidden flex flex-1 px-10 justify-end items-center"
        style={{zIndex: 10000}}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] min-w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-slate-500 absolute z-10 top-20 right-0 mx-4 mt-10 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <div className="" style={{zIndex: 100000}}>
              <ThemeButton className="px-20" />
            </div>

            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title === "GitHub" ? (
                  <a href="https://github.com/smartnodes-lab">{nav.title}</a>
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
