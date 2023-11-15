import React, { useState } from "react";
import Singledivgrid from "../components/Singledivgrid";
import Sidebar from "../components/Sidebar";

const Gridview = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleGridClick = (num) => {
    setSelectedMovie(num);
  };

  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-2 gap-5 mt-6 h-[60%] w-[100%]">
      <Singledivgrid num="1" onGridClick={handleGridClick} />
      <Singledivgrid num="2" onGridClick={handleGridClick} />
      <Singledivgrid num="3" onGridClick={handleGridClick} />
      <Singledivgrid num="4" onGridClick={handleGridClick} />
      <Singledivgrid num="5" onGridClick={handleGridClick} />
      <Singledivgrid num="6" onGridClick={handleGridClick} />

      {selectedMovie && (
        <div className="absolute top-2 left-[15%] sm:left-[30%] md:top-[15px] md:left-[45%] bg-[#3B3F5C]   ">
          <Sidebar num={selectedMovie} onClose={() => setSelectedMovie(null)} />
        </div>
      )}
    </div>
  );
};

export default Gridview;
