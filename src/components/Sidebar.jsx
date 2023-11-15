import React, { useState, useEffect } from "react";
import axios from "axios";
import { Crossicon } from "../assets/images";

const Sidebar = ({ num, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${num}/`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [num]);

  return (
    <div className=" w-[250px] md:w-[300px] h-[600px] relative ">
      <div className="flex justify-between px-3 items-center h-[40px] border-white border-b-2">
        <p className="text-white">Movie details</p>
        <button onClick={onClose}>
          <Crossicon />
        </button>
      </div>

      {movieDetails && (
        <div className="mt-2">
          <h1 className="ml-2 mt-1 text-white">Title</h1>
          <div className="bg-white h-[40px] flex items-center mx-2 pl-3 rounded-md">
            {movieDetails.title}
          </div>

          <h1 className="ml-2 mt-1 text-white">Opening Crawl</h1>
          <div className="bg-white h-[60px] flex mx-2 pl-3 rounded-md overflow-x-auto ">
            {movieDetails.opening_crawl}
          </div>

          <h1 className="ml-2 mt-1 text-white">Director</h1>
          <div className="bg-white h-[40px] flex items-center mx-2 pl-3 rounded-md">
            {movieDetails.director}
          </div>

          <h1 className="ml-2 mt-1 text-white">Release Date</h1>
          <div className="bg-white h-[40px] flex items-center mx-2 pl-3 rounded-md">
            {movieDetails.release_date}
          </div>
        </div>
      )}

      <div className="flex justify-center border-white border-t-2 bottom-0 absolute w-[250px] md:w-[300px]">
        <button
          className=" w-[220px] md:w-[280px] h-[40px] bg-[#CB1A80] text-[#FAFAFB] my-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
