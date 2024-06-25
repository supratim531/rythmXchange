import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex flex-row justify-center items-center gap-2 px-6 py-3 rounded transition-all shadow-sm shadow-slate-600 text-white bg-blue-600 hover:bg-blue-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
