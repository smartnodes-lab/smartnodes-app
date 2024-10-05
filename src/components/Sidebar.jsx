import React from "react";
import { Link, useNavigate } from "react-router-dom";  // Import Link from react-router-dom
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

import { logo } from "../assets";
import { useStateContext } from "../contexts/contextProvider";
import { sideLinks } from "../constants";

const Sidebar = ({ open, close }) => {
    const { activeMenu, setActiveMenu } = useStateContext();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [openMenuId, setOpenMenuId] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id); // Toggle logic simplified
    };
    
    return (
        <div className="h-screen ml-3 lg:overflow-hidden border-r border-black overflow-auto md:hover:overflow-auto pb-10">
            <div className="flex justify-between items-center">
                <Link to="/" className="bg-gray-400 rounded-xl ml-2 mt-4 px-3">
                    <img className="w-40" src={logo}/>
                </Link>

                <button 
                    type="button" 
                    onClick={() => setActiveMenu(!activeMenu)} 
                    className="rounded-full p-3 mt-4 text-lg"
                >
                    <MdOutlineCancel color="grey"/>
                </button>
            </div>
            <div className="mt-10">
                {sideLinks.map((item) => (
                    <div key={item.title} className="mb-20 ml-1">
                        <p className="text-gray-400 font-poppins text-lg dark:text-gray-400 m-3 mt-4 uppercase">
                            {item.title}
                        </p>
                        {/* {item.links && () } */}
                        {item.links.map((link) => (
                            <div onClick={() => {
                                if (link.sublinks && link.sublinks.length > 0) {
                                    // If sublinks are present, toggle the dropdown
                                    setOpenMenuId(prev => (prev === link.id ? null : link.id));
                                } else {
                                    navigate(`/${link.id}`);
                                }
                            }} key={link.id}>
                                <p className="flex items-center mt-5 cursor-pointer">
                                    <span className="ml-5 font-poppins font-xl dark:text-gray-400 text-gray-900">{link.name}</span>
                                </p>
                                {link.sublinks && openMenuId === link.id && (
                                    <div className="ml-10">
                                        {link.sublinks.map(subLink => (
                                            <Link key={subLink.id} to={`docs/${subLink.id}`} className="block mt-5">
                                                <span className="ml-5 font-poppins font-xl dark:text-gray-400 text-gray-900">
                                                    {subLink.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
 