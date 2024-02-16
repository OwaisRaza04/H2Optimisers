import React from 'react';
import Plot from 'react-plotly.js';

const ChlorineGraph = () => {
  // Sample data (replace with your actual data)
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const chlorineValues = [1.2, 1.0, 1.5, 0.8, 1.3, 1.2, 1.4];

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
