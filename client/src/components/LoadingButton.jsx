import React from "react";

const LoadingButton = ({ children, type = "button", ...props }) => {
  return (
    <button
      type={type}
      disabled
      className="italic opacity-80 inline-flex flex-row justify-center items-center gap-2 px-6 py-3 rounded text-white bg-blue-800"
      {...props}
    >
      {children}
    </button>
  );
};

export default LoadingButton;
