import React, { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../components/Circle";
import Arc from "../components/Arc";
import Rect from "../components/Rect";

const circle = {
  width: 400,
  height: 400,
  cx: 200,
  cy: 200,
};

const width = 1200;
const height = 600;

const BasicSvg = () => {
  const [mousePos, setMousePos] = useState({ x: width / 2, y: height / 2 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePos({ x: clientX, y: clientY });
  };
  return (
    <div className="p-4">
      <Link
        to="/"
        className="bg-orange-600 rounded-lg text-white text-lg px-4 py-2 w-1/3 mt-6 cursor-pointer mr-4"
      >
        back to home
      </Link>
      <div className="flex flex-row justify-center">
        <Rect width={circle.width} height={circle.height} />
        <Circle
          width={circle.width}
          height={circle.height}
          cx={circle.cx}
          cy={circle.cy}
          r="100"
        />
        <Arc />
      </div>
      <div className="flex flex-row justify-center bg-black">
        <svg width={width} height={height} onMouseMove={handleMouseMove}>
          <circle
            r="20"
            fill="#ea580c"
            cx={mousePos.x - 40}
            cy={mousePos.y - 320}
          ></circle>
          <circle
            r="10"
            fill="white"
            cx={mousePos.x - 40}
            cy={mousePos.y - 320}
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default BasicSvg;
