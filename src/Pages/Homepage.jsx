import React from "react";

const Homepage = () => {
  return (
    <div className="flex justify-center items-center w-[100%] mt-5 sm:mt-10 md:mt-0 ">
      <div className="bg-white w-[80%] h-[570px] sm:h-[450px] md:w-[65%] md:h-[50%] rounded-xl p-[20px] ">
        <div className="w-[100%] h-[55%] bg-[url('/homepageimg.png')] bg-cover bg-no-repeat bg-center rounded-md "></div>

        <h1 className="mt-3 font-bold text-2xl ">Welcome to Star Wars</h1>
        <h1 className="font-bold text-2xl ">Dashboard</h1>
        <p className="mt-3 text-[#3B3F5C] opacity-80 ">
          Star Wars is an American epic space opera multimedia franchise created
          by George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
