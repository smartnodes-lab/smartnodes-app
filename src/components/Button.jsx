import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, onClick }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} font-bold p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;