import React from "react";

const Poupcomponent = ({ icon, name, bgcolor, onClick }) => {
  const handleClick = () => {
    if (name === "Delete") {
      onClick();
    }
  };

  return (
    <div
      className="flex items-center  space-x-3  mt-1 pl-2 rounded-md "
      onClick={handleClick}
    >
      <div>{icon}</div>
      <p className={bgcolor}>{name}</p>
    </div>
  );
};

export default Poupcomponent;
