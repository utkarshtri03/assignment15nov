import React, { useState, useEffect } from "react";
import {
  Alienicon,
  Listicon,
  Crossicon,
  Peopleicon,
  Planeticon,
  Reelicon,
  Starshipicon,
  Vehicleicon,
} from "../assets/images";
import Folders from "../components/Folders";

const Navbar = ({ onPageChange }) => {
  const [showFolders, setShowFolders] = useState(true);
  const [isListIcon, setIsListIcon] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowFolders(window.innerWidth >= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleFolders = () => {
    setShowFolders(!showFolders);
  };

  const toggleIcon = () => {
    setIsListIcon(!isListIcon);
  };

  return (
    <div className="md:w-[223px] md:h-screen relative">
      <div className="ml-[25px] pt-4">
        <img src="/starwars.png" alt="" />
      </div>
      <div
        className="md:hidden absolute right-3 top-2 cursor-pointer"
        onClick={() => {
          toggleFolders();
          toggleIcon();
        }}
      >
        {isListIcon ? <Listicon /> : <Crossicon />}
      </div>
      <div
        className={
          showFolders ? "md:flex flex-col space-y-3 h-auto " : "hidden"
        }
      >
        {showFolders && (
          <>
            <Folders
              foldername="Film"
              filename="Movie Name"
              fileicon={<Reelicon />}
              onPageChange={() => onPageChange("heropage")}
            />
            <Folders
              foldername="People"
              filename="People Name"
              fileicon={<Peopleicon />}
              onPageChange={() => onPageChange("heropage")}
            />
            <Folders
              foldername="Planets"
              filename="Planets Name"
              fileicon={<Planeticon />}
              onPageChange={() => onPageChange("heropage")}
            />
            <Folders
              foldername="Species"
              filename="Species Name"
              fileicon={<Alienicon />}
              onPageChange={() => onPageChange("heropage")}
            />
            <Folders
              foldername="Starships"
              filename="Starships Name"
              fileicon={<Starshipicon />}
              onPageChange={() => onPageChange("heropage")}
            />
            <Folders
              foldername="Vehicle"
              filename="Vehicles Name"
              fileicon={<Vehicleicon />}
              onPageChange={() => onPageChange("heropage")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
