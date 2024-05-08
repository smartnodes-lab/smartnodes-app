import React from "react";
import { Link, NavLink } from "react-router-dom";  // Import Link from react-router-dom
import { MdOutlineCancel } from "react-icons/md";
import { useState, useEffect } from "react";

import { real_dark_logo, logo } from "../assets";
import { useStateContext } from "../contexts/contextProvider";
import { sideLinks } from "../constants";

const Sidebar = ({ open, close }) => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    return (
        <div className="h-screen ml-3 lg:overflow-hidden border-r border-black overflow-auto md:hover:overflow-auto pb-10">
            <div className="flex justify-between items-center">
                <Link to="/" className="ml-2 mt-4">
                    <img className="w-40" src={theme === "dark" ? real_dark_logo : logo}/>
                </Link>

                <button 
                    type="button" 
                    onClick={() => setActiveMenu(!activeMenu)} 
                    className="rounded-full p-3 mt-4 text-lg"
                >
                    <MdOutlineCancel />
                </button>
            </div>
            <div className="mt-10">
                {sideLinks.map((item) => (
                    <div key={item.title} className="mb-20 ml-1">
                        <p className="text-gray-400 font-poppins text-lg dark:text-gray-400 m-3 mt-4 uppercase">
                            {item.title}
                        </p>
                        {item.links.map((link) => (
                            <NavLink
                                to={`/${link.id}`}
                                key={link.name}
                                className="flex flex-row items-center mt-5"
                            >
                                {/* <link.icon style={{ width: "30px", height: "30px", color: theme === "dark" ? "white" : "black" }} className=""/> */}
                                <span className="ml-5 font-poppins font-xl dark:text-gray-400 text-gray-900">{link.name}</span>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
 