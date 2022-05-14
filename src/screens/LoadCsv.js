import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import data from "../data/bardata.csv";
import { Link } from "react-router-dom";

const LoadCsv = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    d3.csv(data)
      .then((data) => setLoadData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="p-4">
        <Link
          to="/"
          className="bg-orange-600 rounded-lg text-white text-lg px-4 py-2 w-1/3 mt-6 cursor-pointer mr-4"
        >
          back to home
        </Link>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">LoadCsv</h2>
          {loadData.map((el) => {
            return (
              <p key={el.letter}>
                {el.letter} = {el.frequency}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LoadCsv;
