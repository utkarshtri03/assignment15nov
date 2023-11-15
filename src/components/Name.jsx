import React, { useState } from "react";
import { Reelicon, Rightarrow, TopArrow } from "../assets/images";

const Name = ({ filename, fileicon, onPageChange }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onPageChange("heropage");
  };

  return (
    <div
      className={`flex items-center ml-[5%] pl-[13%] mt-1 relative h-[30px] rounded-md cursor-pointer ${
        clicked ? "bg-[#ffffff9d]" : ""
      }`}
      onClick={handleClick}
    >
      <div className="h-[20px] flex items-center ">{fileicon}</div>

      <p className="text-[#FFFFFF] ml-[10%] text-sm ">{filename}</p>
      <div className="absolute right-[3px]">
        <Rightarrow />
      </div>
    </div>
  );
};

export default Name;
