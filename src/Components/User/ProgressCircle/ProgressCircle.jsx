import React from "react";
import "./ProgressCircle.css";

// Have to make this component responsive for smaller screens

const ProgressCircle = ({ percentage }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-[10rem] h-[5rem] flex items-center justify-center">
      <svg className=" progress-circle">
        <circle
          className="progress-circle-background"
          cx="50"
          cy="50"
          r={radius}
        />
        <circle
          className="progress-circle-foreground"
          cx="50"
          cy="50"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="50" y="50" className="progress-text">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
