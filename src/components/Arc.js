import React from "react";
import { arc } from "d3";

const arcEl = arc()
  .innerRadius(100)
  .outerRadius(200)
  .startAngle(20)
  .endAngle(Math.PI / 2);

const Arc = () => {
  return (
    <svg width="400" height="400">
      <svg x="100" y="100">
        <path d={arcEl()} fill="#ea580c" />
        <circle cx="0" cy="0" r="50" fill="black" />
      </svg>
    </svg>
  );
};

export default Arc;
