import React from "react";

function LoadingSpinner() {

  return (
    <svg
      focusable="false"
      className="loader size-24 mx-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      textRendering="geometricPrecision"
      shapeRendering="geometricPrecision"
      whitespace="pre"
    >
      <g
        transform="translate(1.5 1.5)"
        className="animation-0"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <ellipse
          rx="10.5"
          ry="10.5"
          stroke="#212653"
          opacity=".07"
          transform="translate(10.5 10.5)"
        />
        <ellipse
          rx="10.5"
          ry="10.5"
          strokeDasharray="2 65.56"
          transform="translate(10.5 10.5)"
          className="animation-1"
        />
      </g>
    </svg>
  );
}

export default LoadingSpinner;