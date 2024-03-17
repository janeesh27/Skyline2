import React from "react";
import "./index.css";

const MainButton = ({ text, onClick }) => {
  return (
    <button
      id="btn"
      className="button text-white py-2 px-1 bg-blue-300 w-[100px] mx-auto mt-4 rounded-md"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default MainButton;
