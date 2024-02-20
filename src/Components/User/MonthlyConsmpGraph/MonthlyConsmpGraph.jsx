import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const MonthlyConsmpGraph = () => {
  const [consumptionData, setConsumptionData] = useState(null);
  const mail = localStorage.getItem("mail");
  const weekdays = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let Values;
  let monthlyUsage = new Array();
  let lastSevenMonData = new Array();
  

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
      const getMonthlyData=(arr)=>{ 
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=0;
        for(let j=0;j<30;j++,i++){
            if(i>=arr.length){
                break;
            }
            sum+=arr[i].waterUsage;
        }
        monthlyUsage.push(sum);
    }
    let j=monthlyUsage.length - 1;
    for(let i=0;i<7;i++){
      lastSevenMonData[i] = monthlyUsage[j-(6-i)]
    }
    // console.log(monthlyUsage)
    console.log('lastSevenMonData'+lastSevenMonData);
}

    if (consumptionData && consumptionData.usage) {
      const arr = consumptionData.usage.data;
      getMonthlyData(arr);
      let lastSeven = arr.slice(Math.max(arr.length - 7, 0));
      console.log(lastSeven);
      let Values = lastSeven.map(item => item.waterUsage);
      console.log(Values);
  
      // Create a trace for the plot
      const trace = {
        x: weekdays,
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
export default MonthlyConsmpGraph;
