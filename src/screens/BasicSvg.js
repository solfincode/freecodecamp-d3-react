import React from "react";
import { Link } from "react-router-dom";
import Circle from "../components/Circle";
import Arc from "../components/Arc";

const circle = {
  width: 400,
  height: 400,
  cx: 200,
  cy: 200,
};

const BasicSvg = () => {
  return (
    <div className="p-4">
      <Link
        to="/"
        className="bg-orange-600 rounded-lg text-white text-lg px-4 py-2 w-1/3 mt-6 cursor-pointer mr-4"
      >
        back to home
      </Link>
      <div className="flex flex-row justify-center">
        <Circle
          width={circle.width}
          height={circle.height}
          cx={circle.cx}
          cy={circle.cy}
          r="100"
        />
        <Circle
          width={circle.width}
          height={circle.height}
          cx={circle.cx}
          cy={circle.cy}
          r="100"
        />
        <Arc />
      </div>
    </div>
  );
};

export default BasicSvg;
