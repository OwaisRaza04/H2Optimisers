import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const MonthlyConsmpGraph = ({ consumptionData,lastSevenMonData}) => {

  const months = ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
 

  useEffect(() => {

    if (consumptionData && consumptionData.usage) {
 
      const trace = {
        x: months,
        y: lastSevenMonData,
        type: 'bar', // You can use 'scatter' or other plot types
        marker: {
          color: '#5dccfc', // You can customize the color
        },
      };

      // Layout configuration
      const layout = {
        // title: '',
        xaxis: {
          title: 'Month',
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
      config={{ displayModeBar: false }}
    />
  );
}
export default MonthlyConsmpGraph;