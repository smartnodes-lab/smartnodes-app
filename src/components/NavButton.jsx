import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ title, subtitle, page }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [page]); // Scrolls to the top whenever the 'page' prop changes


  return (
    <button className={`${"Previous" === subtitle ? "text-left" : "text-right"} border border-white px-3 py-3 w-[325px] text-white bg-zinc-400 dark:bg-gray-700`} onClick={() => navigate(`/${page}`)}>
      <p>{subtitle}</p>
      <h2 className="font-bold">{title}</h2>
    </button>
  );
};

export default NavButton;