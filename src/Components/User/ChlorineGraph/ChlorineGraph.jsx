import React from 'react';
import Plot from 'react-plotly.js';

const ChlorineGraph = ({consumptionData}) => {
  // Sample data (replace with your actual data)
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let chlorineValues = [1.2, 1.0, 1.5, 0.8, 1.3, 1.2, 1.4];


  // Sample data (replace with your actual data)
  let j = consumptionData.length - 1;
  for (let i = 0; i < 7; i++) {
    chlorineValues[i] = consumptionData[j - (6 - i)].chlorine
  }

  // Create a trace for the plot
  const trace = {
    x: weekdays,
    y: chlorineValues,
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
      title: 'Chlorine',
    },
    hovermode: false,
    autosizable: false,
    dragmode: false
  };

  return (
    <Plot
      data={[trace]}
      layout={layout}
      style={{ width: '100%', height: '100%' }}
      config={{displayModeBar: false}}
    />
  );
};

export default ChlorineGraph;
