import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="text-2xl w-1/2 mx-auto mt-10 text-center">
        <h2>hello d3 js with react</h2>
        <div className="flex flex-row flex-wrap justify-center">
          <Link
            to="/basic-svg"
            className="bg-orange-600 rounded-lg text-white text-lg p-1 w-1/3 mt-6 cursor-pointer mr-4"
          >
            basic svg
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
