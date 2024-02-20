import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const DailyConsumptionGraph = () => {
  const [consumptionData, setConsumptionData] = useState(null);
  const mail = localStorage.getItem("mail");
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let Values;
  

  // const mail = localStorage.getItem("mail");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getDeviceData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mail: mail }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setConsumptionData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [mail]);

  useEffect(() => {
    if (consumptionData && consumptionData.usage) {
      const arr = consumptionData.usage.data;
      let lastSeven = arr.slice(Math.max(arr.length - 7, 0));
      console.log(lastSeven);
      let Values = lastSeven.map(item => item.waterUsage);
      console.log(Values);
  
      // Create a trace for the plot
      const trace = {
        x: weekdays,
        y: Values,
        type: 'bar', // You can use 'scatter' or other plot types
        marker: {
          color: '#5dccfc', // You can customize the color
        },
      };
  
      // Layout configuration
      const layout = {
        // title: '',
        xaxis: {
          title: 'Days',
        },
        yaxis: {
          title: 'Consumption',
        },
        hovermode: false,
        autosizable: false,
        dragmode: false
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
      style={{ width: '100%', height: '100%' }}
      config={{displayModeBar: false}}
    />
  );
  }
export default DailyConsumptionGraph;
