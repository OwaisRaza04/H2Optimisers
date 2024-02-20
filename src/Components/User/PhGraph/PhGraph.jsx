import React from 'react';
import Plot from 'react-plotly.js';

const PhGraph = () => {
  // Sample data (replace with your actual data)
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const phValues = [7.2, 7.5, 7.0, 6.8, 7.3, 6.8, 7.3];

  // Create a trace for the plot
  const trace = {
    x: weekdays,
    y: phValues,
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
      title: 'pH',
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

export default PhGraph;
