import React from "react";

const Circle = ({ width, height, cx, cy, r }) => {
  return (
    <>
      <svg width={width} height={height}>
        <circle cx={cx} cy={cy} r={r} fill="#ea580c"></circle>
        <circle cx={cx} cy={cy} r={r / 2} fill="white"></circle>
      </svg>
    </>
  );
};

export default Circle;
