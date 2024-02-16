import React from "react";
import "./MainPage.css";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import waterDropImage from "../../../../public/images/waterDrop.png";
import waterWave1 from "../../../../public/images/waterWave.png";
import waterWave2 from "../../../../public/images/waterWave2.png";
import gPayIcon from "../../../../public/images/google-pay-icon.png";
import Footer from "../Footer/Footer";
import TopSavers from "../TopSavers/TopSavers";
import BookingForm from '../BookingForm/BookingForm';

const MainPage = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [waterQuality, setWaterQuality] = useState("Poor");
  const [consumptionData, setConsumptionData] = useState(null);
  const [QualityData, setQualityData] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString("en-US", { weekday: "long" });

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12; // Convert to 12-hour format

      const formattedTime = `${formattedHours}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${ampm}`;

      setCurrentDateTime(`${dayOfWeek}, ${formattedTime}`);
    };

    //Fetching Consumption Data
    fetch("https://api.example.com/consumption")
      .then((response) => response.json())
      .then((data) => setConsumptionData(data))
      .catch((error) => console.error("Error fetching data:", error));

      fetch("https://api.example.com/waterquality")
      .then((response) => response.json())
      .then((data) => {
        const qualityData = data[0].show.runtime;
        setQualityData(qualityData);
    
        // Now that QualityData is updated, set the water quality
        if (qualityData >= 90) {
          setWaterQuality("Excellent");
        } else if (qualityData >= 70 && qualityData < 90) {
          setWaterQuality("Good");
        } else {
          setWaterQuality("Poor");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
      

    // Initial call to set the time when the component mounts
    updateDateTime();
    // console.log(QualityData);
    // Update the time every minute
    const intervalId = setInterval(updateDateTime, 60000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  

  const getQualityColor = () => {
    switch (waterQuality) {
      case "Good":
        return "bg-green-400";
      case "Excellent":
        return "bg-blue-400";
      case "Poor":
        return "bg-orange-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div class="container mx-auto p-4 m-5">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <h1 className="font-semibold tracking-[0.2rem] taxt-lg opacity-80 mb-10">
            User Panel
          </h1>
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div>
                <div className="relative bg-white shadow-lg rounded-xl">
                  <div className="">
                    <div className="px-6">
                      <h1 className="mb-2 font-semibold">{currentDateTime}</h1>
                      {/* <p className="text-md opacity-70">{consumptionData.amount}Ltr water </p> */}
                      <p className="text-md opacity-70">20Ltr water </p>
                    </div>
                    <img
                      className="absolute top-0 right-10"
                      src={waterDropImage}
                      alt="water-drop"
                    />
                    <div className="relative ">
                      <img
                        className="absolute w-full h-full rounded-xl"
                        src={waterWave1}
                        alt="water-drop"
                      />
                      <img
                        className="w-full h-full rounded-xl"
                        src={waterWave2}
                        alt="water-drop"
                      />
                    </div>
                  </div>
                  <div className=" btn absolute px-5 py-3 ml-6 text-white bg-blue-400 rounded-lg shadow-sm consumption-btn lg:top-[8rem]">
                    <a className="m-auto font-bold cursor-pointer">
                      Consumption
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div className="">
                <div className="relative bg-white shadow-lg rounded-xl">
                  <div className="">
                    <div className="px-6 ">
                      <h1 className="mb-2 font-semibold">Water Quality</h1>
                      <span
                        className={`ml-0 px-4 font-semibold text-white rounded-md ${getQualityColor()}`}
                      >
                        {waterQuality}
                      </span>
                      {waterQuality === "Poor" && (
                        <button
                        onClick={toggleForm}
                        className="px-4 ml-2 text-white bg-gray-400 rounded-md opacity-60">
                          Report
                        </button>
                      )}
                    </div>
                    <img
                      className="absolute top-0 right-10"
                      src={waterDropImage}
                      alt="water-drop"
                    />
                    <div className="relative">
                      <img
                        className="absolute w-full h-full rounded-xl"
                        src={waterWave1}
                        alt="water-drop"
                      />
                      <img
                        className="w-full h-full rounded-xl"
                        src={waterWave2}
                        alt="water-drop"
                      />
                    </div>
                  </div>
                  <div className="btn absolute px-5 py-3 ml-6 text-white bg-blue-400 rounded-lg shadow-sm consumption-btn lg:top-[8rem]">
                    <a className="m-auto font-bold cursor-pointer">
                      View Quality Details
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full px-4 mt-8 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs h-[16rem]">
              <div>
                <div
                  className="relative p-4 shadow-lg rounded-xl"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "95%",
                    height: "100%",
                    background: "linear-gradient(45deg, #fff 50%, #bceafd 50%)",
                    transformOrigin: 0,
                  }}
                >
                  <div className="">
                    <div className="px-5">
                      <h1 className="text-lg font-bold ">Bill Status</h1>
                    </div>
                    <div className="m-5 mt-2">
                      <p class=" mb-2">
                        Billing Period{" "}
                        <span className="px-2 ml-2 font-normal text-white bg-gray-400 rounded-md opacity-70">
                          Jan 1, 2024 - Jan 31, 2024
                        </span>
                      </p>

                      <p class=" mb-2">
                        Bill Amount{" "}
                        <span className="px-2 ml-2 font-normal text-white bg-gray-400 rounded-md opacity-70">
                          Rs 50.00
                        </span>
                      </p>

                      <p class=" mb-2">
                        Due Date{" "}
                        <span className="px-2 ml-2 font-normal text-white bg-gray-400 rounded-md opacity-70">
                          Feb 15, 2024
                        </span>
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-3 px-5 py-3 ml-6 text-white bg-blue-400 rounded-lg shadow-sm ">
                    <img className="w-8 h-6" src={gPayIcon} alt="nn" />
                    <a className="m-auto font-bold cursor-pointer">Pay Now</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-full  mt-8 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs h-[16rem] ">
              <div>
                <div
                  className="relative p-4 shadow-lg rounded-xl"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "95%",
                    height: "100%",
                    background: "linear-gradient(45deg, #fff 50%, #bceafd 50%)",
                    transformOrigin: 0,
                  }}
                >
                  {/* <div className=""> */}
                  <h2 class="text-2xl font-semibold mb-4">Conservation Tips</h2>
                  <p class="text-gray-600 mb-4 italic">
                    Learn how to save water and contribute to a sustainable
                    environment.
                  </p>
                  <ul class="list-disc ml-8">
                    <li>Fix leaky faucets promptly.</li>
                    <li>Use a broom instead of a hose to clean driveways.</li>
                    <div className="flex items-center gap-3">
                      <li>Collect rainwater for plants.</li>
                      <a
                        href="https://www.un.org/sustainabledevelopment/the-lazy-persons-guide-to-saving-water/"
                        className="text-sm italic text-gray-600 cursor-pointer"
                        target="_blank"
                      >
                        read more
                      </a>
                    </div>
                  </ul>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <TopSavers />
          </div>
        </div>
      </div>
     
      <div>
        <Footer />
      </div>
      {showForm && (
        <BookingForm
          onClose={toggleForm}
        />
      )}
    </div>
  );
};

export default MainPage;
