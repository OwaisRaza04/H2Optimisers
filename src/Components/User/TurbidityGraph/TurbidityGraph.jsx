import React from 'react';
import Plot from 'react-plotly.js';

const TurbidityGraph = () => {
  // Sample data (replace with your actual data)
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const turbidityValues = [0.1, 0.2, 0.15, 0.3, 0.25, 0.2, 0.18];

  // Create a trace for the plot
  const trace = {
    x: weekdays,
    y: turbidityValues,
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
      title: 'Turbidity',
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

export default TurbidityGraph;
