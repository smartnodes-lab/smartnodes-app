import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ title, subtitle, page }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [page]); // Scrolls to the top whenever the 'page' prop changes


  return (
    <button className={`${subtitle == "Previous" ? "text-left" : "text-right"} border border-black dark:border-white px-5 py-3 w-[350px] dark:text-white`} onClick={() => navigate(`/${page}`)}>
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </button>
  );
};

export default NavButton;