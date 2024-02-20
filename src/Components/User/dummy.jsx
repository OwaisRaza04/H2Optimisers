import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./ConsumptionDetails.css";
import ConservingTips from "../ConservingTips/ConservingTips";
import waterWave1 from "../../../../public/images/waterWave.png";
import waterWave2 from "../../../../public/images/waterWave2.png";
import enviromentalImpact from "../../../../public/images/enviromentalImpact.png";
import consumptionBar from "../../../../public/images/consumptionBar.png";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import Footer from "../Footer/Footer";

const ConsumptionDetails = () => {
  const percentage = 20;
  const [progress, setProgress] = useState(percentage);
  const [consumptionData, setConsumptionData] = useState(null); 

  const mail=localStorage.getItem("mail"); 


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
    }
    getData();
  }, [mail]);  

  useEffect(() => {
    if (consumptionData && consumptionData.usage) { 
      console.log(consumptionData.usage);
    }
  }, [consumptionData]);  



  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div class="container mx-auto p-4 m-5">
          <h1 className="mb-5 text-3xl font-bold">Consumption</h1>
          <span
            style={{ backgroundColor: "#b6e8fd" }}
            className="deks_consumption_data hidden md:block mx-auto w-1/2 py-1 px-4  border rounded-lg shadow-md font-bold tracking-[0.2rem] taxt-lg opacity-80 mb-10 text-black"
          >
            <p className="text-center">Monthly Consumption : 1200 Ltr</p>
          </span>
          <span
            style={{ backgroundColor: "#b6e8fd" }}
            className="mob_consumption_data block md:hidden mx-auto w-full py-1 px-4  border rounded-lg shadow-md font-bold tracking-[0.2rem] taxt-lg opacity-80 mb-10 text-black"
          >
            <p className="text-center">Monthly Consumption : 1200 Ltr</p>
          </span>
          <div className="flex flex-wrap mt-10 -mx-4">
            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div className="bg-white shadow-lg rounded-xl">
                <h1
                  className="m-5 text-lg font-semibold text-center"
                  style={{ color: "#158df7" }}
                >
                  Daily Consumption
                </h1>
                <div className="">
                  <img
                    className="w-[17rem] m-auto mb-3"
                    src={consumptionBar}
                    alt=""
                  />
                </div>
                <div className="relative">
                  <img
                    className="absolute w-full h-full rounded-xl"
                    src={waterWave1}
                    alt="water-drop"
                  />
                  <img
                    className="w-full rounded-xl"
                    src={waterWave2}
                    alt="water-drop"
                  />
                  <h1 className="absolute ml-6  lg:top-[5rem] font-bold text-2xl text-white">
                    24.00 Ltr
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div className="bg-white shadow-lg rounded-xl">
                <h1
                  className="m-5 text-lg font-semibold text-center"
                  style={{ color: "#158df7" }}
                >
                  Monthly Consumption
                </h1>
                <div className="">
                  <img
                    className="w-[17rem] m-auto mb-3"
                    src={consumptionBar}
                    alt=""
                  />
                </div>
                <div className="relative">
                  <img
                    className="absolute w-full h-full rounded-xl"
                    src={waterWave1}
                    alt="water-drop"
                  />
                  <img
                    className="w-full rounded-xl"
                    src={waterWave2}
                    alt="water-drop"
                  />
                  <h1 className="absolute ml-6  lg:top-[5rem] font-bold text-2xl text-white">
                    May, 2024
                  </h1>
                </div>
              </div>
            </div>

            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div className="bg-white shadow-lg rounded-xl">
                <h1
                  className="py-8 m-5 text-lg font-semibold text-center"
                  style={{ color: "#158df7" }}
                >
                  Peak Usage Time
                </h1>
                <div className="ml-10">
                  <div className="flex items-center justify-center pb-10">
                    <div className="">
                      <ProgressCircle percentage="60" />
                      <p className="ml-[1rem] font-semibold opacity-70">
                        Moning
                      </p>
                    </div>
                    <div>
                      <ProgressCircle percentage="30" />
                      <p className="ml-[1rem] font-semibold opacity-70">
                        Evening
                      </p>
                    </div>
                    <div>
                      <ProgressCircle percentage="10" />
                      <p className="ml-[1.5rem] font-semibold opacity-70">
                        Night
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div className="bg-white shadow-lg rounded-xl">
                <h1
                  className="py-8 pb-0 m-5 text-lg font-semibold text-center"
                  style={{ color: "#158df7" }}
                >
                  Enviromental Impact
                </h1>

                <div className="flex items-center justify-center gap-[8rem] p-10">
                  <span className="px-4 mb-10 text-2xl font-semibold text-white bg-green-400 rounded-md">
                    Low
                  </span>
                  <ProgressCircle percentage="10" />
                </div>
              </div>
            </div>
          </div>
          
            <ConservingTips />
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ConsumptionDetails;