import React, { useState } from "react";
import { Foldericon, Rightarrow, TopArrow } from "../assets/images";
import Name from "./Name";

const Folders = ({ foldername, filename, fileicon, onPageChange }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="mt-10 relative cursor-pointer ">
      <div
        className={`flex items-center ml-[5%] pl-[5%] h-[35px] rounded-lg ${
          isExpanded ? "bg-[#CB1A80]" : ""
        }  `}
        onClick={toggleExpand}
      >
        <Foldericon />
        <p className="text-[#FFFFFF] ml-[10%]">{foldername} </p>
        <div className=" absolute right-[5px] ">
          {isExpanded ? <TopArrow /> : <Rightarrow />}
        </div>
      </div>
      {isExpanded && (
        <div>
          <Name
            filename={filename}
            fileicon={fileicon}
            onPageChange={onPageChange}
          />
          <Name
            filename={filename}
            fileicon={fileicon}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Folders;
