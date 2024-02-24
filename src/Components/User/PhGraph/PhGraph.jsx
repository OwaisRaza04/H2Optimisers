import React from "react";
import Plot from "react-plotly.js";

const PhGraph = ({ consumptionData }) => {
  // Sample data (replace with your actual data)
  const weekdays = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let phValues = [1,2,3,4,5,6,7];
  let j = consumptionData.length - 1;
  for (let i = 0; i < 7; i++) {
    phValues[i] = consumptionData[j - (6 - i)].pH
  }

  // Create a trace for the plot
  const trace = {
    x: weekdays,
    y: phValues,
    type: "bar", // You can use 'scatter' or other plot types
    marker: {
      color: "#5dccfc", // You can customize the color
    },
  };

  // Layout configuration
  const layout = {
    // title: '',
    xaxis: {
      title: "Days",
    },
    yaxis: {
      title: "pH",
    },
    hovermode: false,
    autosizable: false,
    dragmode: false,
  };

  return (
    <Plot
      data={[trace]}
      layout={layout}
      style={{ width: "100%", height: "100%" }}
      config={{ displayModeBar: false }}
    />
  );
};

export default PhGraph;
