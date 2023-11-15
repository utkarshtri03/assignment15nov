import React, { useState } from "react";
import Navbar from "./Pages/Navbar";
import Homepage from "./Pages/Homepage";
import HeroPage from "./Pages/HeroPage";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-[#3B3F5C] flex flex-col md:flex-row h-screen overflow-y-auto overflow-hidden md:overflow-y-hidden ">
      <Navbar onPageChange={handlePageChange} />
      {currentPage === "homepage" ? <Homepage /> : <HeroPage />}
    </div>
  );
}

export default App;
