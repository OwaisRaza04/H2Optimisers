import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import ConservingTips from "../ConservingTips/ConservingTips";
import waterWave1 from "../../../../public/images/waterWave.png";
import waterWave2 from "../../../../public/images/waterWave2.png";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import Footer from "../Footer/Footer";
import DailyConsumptionGraph from "../DailyConsumptionGraph/DailyConsumptionGraph";
import MonthlyConsmpGraph from "../MonthlyConsmpGraph/MonthlyConsmpGraph";
import PhGraph from "../PhGraph/PhGraph";
import TurbidityGraph from "../TurbidityGraph/TurbidityGraph";
import ChlorineGraph from "../ChlorineGraph/ChlorineGraph";
import WaterQualityTips from "../QualityTips/QualityTips";

const AllData = () => {
  const [consumptionData, setConsumptionData] = useState(null);
  const [lastDaypH, setlastDaypH] = useState();
  const [lastDayTurbidity, setlastDayTurbidity] = useState();
  const [lastDayChlorine, setlastDayChlorine] = useState();

  let date = new Date();

  const mail = localStorage.getItem("mail");

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
      setlastDaypH(arr[arr.length - 1].pH);
      setlastDayTurbidity(arr[arr.length - 1].turbidity);
      setlastDayChlorine(arr[arr.length - 1].chlorine);
    }
  }, [consumptionData]);

  const percentage = 20;
  const [lastMonthConsumpt, setlastMonthConsumpt] = useState();
  const [lastDayConumpt, setlastDayConumpt] = useState();
  let monthlyUsage = new Array();
  let lastSevenMonData = new Array();

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(date.getDate());

  useEffect(() => {
    if (consumptionData && consumptionData.usage) {
      const arr = consumptionData.usage.data;
      setlastDayConumpt(arr[arr.length - 1].waterUsage);
      const getMonthlyData = (arr) => {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
          sum = 0;
          for (let j = 0; j < 30; j++, i++) {
            if (i >= arr.length) {
              break;
            }
            sum += arr[i].waterUsage;
          }
          monthlyUsage.push(sum);
        }
        let j = monthlyUsage.length - 1;
        for (let i = 0; i < 7; i++) {
          lastSevenMonData[i] = monthlyUsage[j - (6 - i)];
        }
        console.log("lastSevenMonData" + lastSevenMonData);
        console.log(lastSevenMonData[lastSevenMonData.length - 1]);
        setlastMonthConsumpt(lastSevenMonData[lastSevenMonData.length - 1]);
      };
      getMonthlyData(arr);
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
            <p className="text-center">
              Monthly Consumption : {Math.round(lastMonthConsumpt)} Ltr
            </p>
          </span>
          <span
            style={{ backgroundColor: "#b6e8fd" }}
            className="mob_consumption_data block md:hidden mx-auto w-full py-1 px-4  border rounded-lg shadow-md font-bold tracking-[0.2rem] taxt-lg opacity-80 mb-10 text-black"
          >
            {/* <p className="text-center">Monthly Consumption : {lastMonthConsumpt} Ltrrr</p> */}
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
                <DailyConsumptionGraph consumptionData={consumptionData} />
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
                    {date.getDate() +
                      "/" +
                      date.getMonth() +
                      1 +
                      "/" +
                      date.getFullYear()}{" "}
                    <br></br>
                    {Math.round(lastDayConumpt)} Ltr
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
                <MonthlyConsmpGraph
                  consumptionData={consumptionData}
                  lastSevenMonData={lastSevenMonData}
                />
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
                    {months[date.getMonth()] + " " + date.getFullYear()}
                    <br></br>
                    {Math.round(lastMonthConsumpt)} Ltr
                  </h1>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
      <div>
        <div>
          <div class="container mx-auto p-4 m-5">
            <h1 className="mb-5 text-3xl font-bold">Quality Details</h1>
            <span
              style={{ backgroundColor: "#b6e8fd" }}
              className="hidden w-1/2 px-4 py-1 mx-auto mb-10 font-bold text-black border rounded-lg shadow-md deks_consumption_data md:block taxt-lg opacity-80"
            >
              <p className="text-center tracking-[0.2rem]">
                Latest Measurement
              </p>
              <div className="flex items-center justify-center gap-5 mt-3 text-center">
                <p>
                  PH{" "}
                  <span className="px-2 ml-1 text-white bg-green-400 rounded-md shadow-md ">
                    {lastDaypH}
                  </span>
                </p>
                <p>
                  Turbidity{" "}
                  <span className="px-2 ml-1 ml-2 text-white bg-orange-400 rounded-md shadow-md ">
                    {lastDayTurbidity} NTU
                  </span>
                </p>
                <p>
                  Chlorine{" "}
                  <span className="px-2 ml-1 text-white bg-red-500 rounded-md shadow-md ">
                    {lastDayChlorine} PPM
                  </span>
                </p>
              </div>
            </span>
            <span
              style={{ backgroundColor: "#b6e8fd" }}
              className="mob_consumption_data block md:hidden mx-auto w-full py-1 px-4  border rounded-lg shadow-md font-bold tracking-[0.2rem] taxt-lg opacity-80 mb-10 text-black"
            >
              <p className="text-center tracking-[0.2rem]">
                Latest Measurement
              </p>
              <div className="flex items-center justify-center gap-5 mt-3 text-center">
                <p>
                  PH{" "}
                  <span className="px-2 ml-1 text-white bg-green-400 rounded-md shadow-md ">
                    7.2
                  </span>
                </p>
                <p>
                  Turbidity{" "}
                  <span className="px-2 ml-1 ml-2 text-white bg-orange-400 rounded-md shadow-md ">
                    1 NTU
                  </span>
                </p>
                <p>
                  Chlorine{" "}
                  <span className="px-2 ml-1 text-white bg-red-500 rounded-md shadow-md ">
                    0.2 PPM
                  </span>
                </p>
              </div>
            </span>
            <div className="flex flex-wrap mt-10 -mx-4">
              {/* Days vs Ph */}
              <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
                <div className="bg-white shadow-2xl rounded-xl">
                  <h1
                    className="m-5 text-lg font-semibold text-center "
                    style={{ color: "#158df7" }}
                  >
                    Days Vs pH
                  </h1>
                  <div className="">
                    {consumptionData && (
                      <PhGraph consumptionData={consumptionData.usage.data} />
                    )}
                  </div>
                </div>
              </div>

              {/* Days vs Turbidity */}
              <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
                <div className="bg-white shadow-2xl rounded-xl">
                  <h1
                    className="m-5 text-lg font-semibold text-center"
                    style={{ color: "#158df7" }}
                  >
                    Days vs Turbidity
                  </h1>
                  <div className="">
                    {consumptionData && (
                      <TurbidityGraph
                        consumptionData={consumptionData.usage.data}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Days vs Chlorine */}
              <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs ">
                <div className="bg-white shadow-2xl rounded-2xl">
                  <h1
                    className="m-5 text-lg font-semibold text-center"
                    style={{ color: "#158df7" }}
                  >
                    Days vs Chlorine
                  </h1>
                  <div className="">
                    {consumptionData && (
                      <ChlorineGraph
                        consumptionData={consumptionData.usage.data}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Safe Values */}

              <div className="relative w-full mt-8 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs h-[18rem] ">
                <div>
                  <div
                    className="relative p-4 shadow-2xl rounded-xl"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "95%",
                      height: "100%",
                      background:
                        "linear-gradient(45deg, #fff 50%, #bceafd 50%)",
                      transformOrigin: 0,
                    }}
                  >
                    <h1
                      className="pb-0 mb-5 text-lg font-semibold text-center"
                      style={{ color: "#158df7" }}
                    >
                      Safe Water Quality Values
                    </h1>
                    <p class="text-gray-600 mb-4 italic">
                      Learn about the safe values for pH, turbidity, and
                      chlorine in water to ensure a healthy and sustainable
                      environment.
                    </p>
                    <ul class="list-disc ml-8 ">
                      <li className="mb-2">
                        pH :{" "}
                        <span className="px-2 ml-1 text-white rounded-md shadow-md bg-slate-400">
                          6.5 - 8.5
                        </span>
                      </li>
                      <li className="mb-2">
                        Turbidity :{" "}
                        <span className="px-2 ml-1 text-white rounded-md shadow-md bg-slate-400">
                          Less than 4 NTU
                        </span>
                      </li>
                      <li className="mb-2">
                        Chlorine :{" "}
                        <span className="px-2 ml-1 text-white rounded-md shadow-md bg-slate-400">
                          0.2 - 0.5 mg/l
                        </span>
                      </li>
                    </ul>
                    <a
                      href="https://www.unwater.org/water-facts/water-quality-and-wastewater"
                      className="ml-5 text-sm italic text-gray-600 cursor-pointer"
                      target="_blank"
                    >
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllData;
