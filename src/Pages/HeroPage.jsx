import React, { useState } from "react";
import { Gridicon, Listicon, Searchicon } from "../assets/images";
import Gridview from "./Gridview";
import Listview from "./Listview";

const HeroPage = () => {
  const [currentView, setCurrentView] = useState("grid");

  const switchToGridView = () => {
    setCurrentView("grid");
  };

  const switchToListView = () => {
    setCurrentView("list");
  };

  return (
    <div className="h-screen w-[80%] md:w-[100%] mx-[10%]  md:mx-5 flex flex-col  ">
      <div className="float-right w-[100%]">
        <div className="border border-[white] w-[100%] md:w-[250px] flex items-center pl-1 py-1  mt-5 float-right rounded-md ">
          <Searchicon />
          <input
            type="text"
            placeholder="Search"
            className="bg-[#3B3F5C] ml-1"
          />
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <p className="text-white">Films</p>
        <div className="flex border border-white rounded-lg  items-center ">
          <div
            className={`flex cursor-pointer h-[30px] px-1 items-center rounded-l-lg ${
              currentView === "grid"
                ? "text-white bg-[#ffffff9d]"
                : "text-gray-400"
            }`}
            onClick={switchToGridView}
          >
            <Gridicon />
            {currentView === "grid" && <p>Grid</p>}
          </div>
          <div
            className={`flex h-[30px] rounded-r-lg px-1 items-center cursor-pointer ${
              currentView === "list"
                ? "text-white bg-[#ffffff9d]"
                : "text-gray-400"
            }`}
            onClick={switchToListView}
          >
            <Listicon />
            {currentView === "list" && <p>List</p>}
          </div>
        </div>
      </div>

      {currentView === "grid" ? <Gridview /> : <Listview />}
    </div>
  );
};

export default HeroPage;
