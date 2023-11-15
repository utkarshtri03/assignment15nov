import React, { useState, useEffect } from "react";
import Threedoticon, { Reelicon } from "../assets/images";
import axios from "axios";
import Optionpopup from "../components/Optionpopup";

const Listview = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []);

  const handleThreedotClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeOptionPopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="mt-7">
      <table className="w-full">
        <thead className="bg-[#ffffff9d] h-[40px] text-white">
          <tr>
            <th className="text-left pl-2">Name</th>
            <th className="text-left">Director</th>
            <th className="text-left">Release Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="cursor-pointer">
          {movieData &&
            movieData.map((movie, index) => (
              <tr
                key={index}
                className="border-b border-white text-white h-[40px]"
              >
                <td className="flex items-center pl-2">
                  <Reelicon />
                  <p className="ml-2">{movie.title}</p>
                </td>
                <td className="text-left">{movie.director}</td>
                <td className="text-left">{movie.release_date}</td>
                <td
                  className="float-right mr-3 flex pt-2"
                  onClick={() => handleThreedotClick(movie)}
                >
                  <Threedoticon />
                </td>
                {selectedMovie && selectedMovie.title === movie.title && (
                  <div className="absolute right-[25%] ">
                    <Optionpopup
                      movieName={selectedMovie.title}
                      onClose={closeOptionPopup}
                    />
                  </div>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listview;
