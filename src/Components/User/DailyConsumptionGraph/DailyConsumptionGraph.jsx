import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const DailyConsumptionGraph = ({ consumptionData }) => {
  const weekdays = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

  function getLastSevenDays() {
    const today = new Date().getDay(); // Get the current day (0-6)
    const lastSevenDays = [];

    for (let i = 0; i < 7; i++) {
      const index = (today + 6 - i) % 7; // Calculate the index of the weekday
      lastSevenDays.unshift(weekdays[index]); // Add the weekday to the beginning of the array
    }

    return lastSevenDays;
  }

  const lastSevenDays = getLastSevenDays();

  useEffect(() => {
    if (consumptionData && consumptionData.usage) {
      const arr = consumptionData.usage.data;
      let lastSeven = arr.slice(Math.max(arr.length - 7, 0));
      // console.log(lastSeven);
      let Values = lastSeven.map((item) => item.waterUsage);
      // console.log(Values);

      const trace = {
        x: lastSevenDays,
        y: Values,
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
          title: "Consumption",
        },
        hovermode: false,
        autosizable: false,
        dragmode: false,
      };

      // Set the plot data
      setPlotData({ data: [trace], layout });
    }
  }, [consumptionData]);

  // Initialize plotData state
  const [plotData, setPlotData] = useState({ data: [], layout: {} });

  // Use plotData in the Plot component
  return (
    <Plot
      data={plotData.data}
      layout={plotData.layout}
      style={{ width: "100%", height: "100%" }}
      config={{ displayModeBar: false }}
    />
  );
};
export default DailyConsumptionGraph;
