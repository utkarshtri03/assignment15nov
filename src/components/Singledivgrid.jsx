import React, { useState, useRef, useEffect } from "react";
import Threedoticon, { Reelicon } from "../assets/images";
import Optionpopup from "./Optionpopup";
import DeletePopup from "./DeletePopup";
import axios from "axios";

const Singledivgrid = ({ num, onGridClick }) => {
  const [showOptionsPopup, setShowOptionsPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [movieName, setMovieName] = useState("");
  const popupRef = useRef(null);

  const toggleOptions = (e) => {
    e.stopPropagation();
    setShowOptionsPopup(!showOptionsPopup);
    setShowDeletePopup(false);
  };

  const closeOptionsOnOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowOptionsPopup(false);
      setShowDeletePopup(false);
    }
  };

  const handleGridClick = () => {
    onGridClick(num);
  };

  useEffect(() => {
    const fetchMovieName = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${num}/`);
        setMovieName(response.data.title);
      } catch (error) {
        console.error("Error fetching movie name:", error);
      }
    };

    fetchMovieName();
  }, [num]);

  useEffect(() => {
    document.addEventListener("mousedown", closeOptionsOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeOptionsOnOutsideClick);
    };
  }, []);

  return (
    <div
      onClick={handleGridClick}
      className="h-[300px] md:h-auto mt-4 md:mt-0 cursor-pointer "
    >
      <div className="h-[75%] rounded-lg bg-[url('/homepageimg.png')] bg-cover bg-no-repeat bg-center"></div>
      <div className="h-[25%] mt-1 rounded-lg bg-[#F9FAFD33] bg-opacity-20 flex items-center justify-between p-5 relative">
        <div className="flex items-center space-x-3">
          <Reelicon />
          <p className="text-white">{movieName}</p>
        </div>
        <div
          className="bg-[#ffffff9d] rounded-md p-1 cursor-pointer"
          onClick={(e) => toggleOptions(e)}
        >
          <Threedoticon />
        </div>
        {showOptionsPopup && !showDeletePopup && (
          <div
            className="rounded-md bg-white w-[180px] absolute"
            ref={popupRef}
          >
            <Optionpopup />
          </div>
        )}
        {showDeletePopup && (
          <div
            className="rounded-md bg-white w-[180px] absolute"
            ref={popupRef}
          >
            <DeletePopup onClose={() => setShowDeletePopup(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Singledivgrid;
