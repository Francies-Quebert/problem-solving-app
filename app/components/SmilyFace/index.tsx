"use client";
import React from "react";
import { arc,line } from "d3";

const width = 960;
const height = 500;

const centerX = width / 2;
const centerY = height / 2;

const strokeWidth = 10;

const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;

const mouthArc = arc();
const mouthWidth = 20;
const mouthRadius = 140;


  // Create a D3 line generator
  const lineGenerator = line()
    .x(d => d[0])
    .y(d => d[1]);

  // Calculate the x-coordinates of the mouth's endpoints
  const mouthStartX = mouthRadius * Math.cos(Math.PI / 2);
  const mouthEndX = mouthRadius * Math.cos((Math.PI * 3) / 2);

  // Define the line's coordinates
  const lineData = [
    [mouthStartX, -mouthRadius],
    [mouthEndX, -mouthRadius]
  ];

  // Generate the line path
  const linePath = lineGenerator(lineData);
export const SmilyFace = () => {
  const mouth =
    mouthArc({
      innerRadius: mouthRadius,
      outerRadius: mouthRadius + mouthWidth,
      startAngle: Math.PI / 2,
      endAngle: (Math.PI * 3) / 2,
    }) || "";

  return (
    <div className="bg-white">
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {/* Yellow face */}
          <circle
            r={height / 2}
            fill={"yellow"}
            stroke={"black"}
            strokeWidth={strokeWidth}
          />
          {/* Eye outer */}
          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
            fill={"white"}
            stroke={"black"}
            strokeWidth={strokeWidth / 2}
          />
          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius}
            fill={"white"}
            stroke={"black"}
            strokeWidth={strokeWidth / 2}
          />
          {/* Eye Inner */}

          <circle
            cx={eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius / 2}
            fill={"black"}
          />

          <circle
            cx={-eyeOffsetX}
            cy={-eyeOffsetY}
            r={eyeRadius / 2}
            fill={"black"}
          />
          {/* Mouth */}
          <path d={mouth} />
          
           {/* Horizontal line above the mouth */}
           <path d={linePath} stroke="black" strokeWidth={strokeWidth} />
        </g>

        
      </svg>
    </div>
  );
};
