import React from "react";
import { Alerticon } from "../assets/images";

const DeletePopup = () => {
  return (
    <div className="bg-white h-[220px] w-[350px] rounded-md  p-5 ">
      <div className="bg-[#FEE4E2] rounded-full h-[60px] w-[60px] flex justify-center items-center ">
        <div className="bg-[#eea7a2ef] rounded-full h-[40px] w-[40px] flex justify-center items-center ">
          <Alerticon />
        </div>
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-lg">Caution!</h1>
        <p className="text-[#667085]">Are you sure you want to Delete</p>
      </div>
      <div className="flex w-[100%] mt-5 justify-between ">
        <button className="border border-[#344054] w-[48%] h-[40px] rounded-md  ">
          Cancel
        </button>
        <button className="bg-[#FC5A5A] text-white w-[48%] rounded-md ">
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
