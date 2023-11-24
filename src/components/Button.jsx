import React from "react";

function Button({ children, className }) {
  return (
    <button
      type="submit"
      className={`${className} text-[15px] flex-shrink-0 text-white font-bold bg-[#F86642] rounded-lg py-2 px-4"
    `}
    >
      {children}
    </button>
  );
}

export default Button;
