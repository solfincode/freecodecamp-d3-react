import React from "react";

const Rect = ({ width, height }) => {
  return (
    <>
      <svg width={width} height={height}>
        <rect
          width={width / 2}
          height={height / 2}
          x="100"
          y="100"
          fill="#ea580c"
        ></rect>
        <rect
          width={width / 4}
          height={height / 4}
          x="100"
          y="100"
          fill="black"
        ></rect>
        <rect
          width={width / 6}
          height={height / 6}
          x="100"
          y="100"
          fill="white"
        ></rect>
      </svg>
    </>
  );
};

export default Rect;
