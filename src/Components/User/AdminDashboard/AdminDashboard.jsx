import React from "react";
import "./MainPage.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import waterDropImage from "../../../../public/images/waterDrop.png";
import waterWave1 from "../../../../public/images/waterWave.png";
import waterWave2 from "../../../../public/images/waterWave2.png";
import gPayIcon from "../../../../public/images/google-pay-icon.png";
import Footer from "../Footer/Footer";
import TopSavers from "../TopSavers/TopSavers";
import BookingForm from "../BookingForm/BookingForm";
import GooglePayButton from "@google-pay/button-react";

const AdminDashboard = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [waterQuality, setWaterQuality] = useState("Poor");
  const [consumptionData, setConsumptionData] = useState(null);
  const [QualityData, setQualityData] = useState(null);

  const previousMonthLastDate = new Date(currentYear, currentMonth, 0);
  const previousMonthFirstDate = new Date(currentYear, currentMonth - 1, 1);

  const dueDate = new Date(currentYear, currentMonth, 15);
  const mail = localStorage.getItem("mail");
  const formatDate = (date) => {
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  const ratePerLiter = 0.02; // Rate per liter in Pune, India

  const calculateBillAmount = (consumption) => {
    return (consumption * ratePerLiter).toFixed(2);
  };

  const billAmount = calculateBillAmount(15000);

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
  }, [mail]);

  useEffect(() => {
    if (consumptionData && consumptionData.usage) {
      console.log(consumptionData.usage.deviceId);
    }
  }, [consumptionData]); // Trigger whenever consumptionData changes

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
            Admin Panel
          </h1>
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full px-4 mb-4 md:w-1/2 lg:w-1/2 xl:w-1/2 mt-xs">
              <div>
                <div className="relative bg-white shadow-lg rounded-xl">
                  <div className="">
                    <div className="px-6">
                      <h1 className="mb-2 font-semibold">{currentDateTime}</h1>
                      <p className="text-md opacity-70">
                        {/* {consumptionData
                          ? Number(
                              consumptionData.usage.data[
                                consumptionData.usage.data.length - 1
                              ].waterUsage
                            ).toFixed(2)
                          : "0.00"}{" "}
                        L */}
                        show todays consumption of all user
                      </p>
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
                    <Link to={"/consumptiondetails"}>
                      <a className="m-auto font-bold cursor-pointer">
                        Consumption
                      </a>
                    </Link>
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
                     
                      <button
                        onClick={toggleForm}
                        className="px-4 ml-2 text-white bg-gray-400 rounded-md opacity-60"
                      >
                        Report
                      </button>
                      
                      {waterQuality == "Poor" && (
                        <p className="text-red-600 opacity-70 text-[10px] ml-1 w-1/2">
                        *We apologize for the inconvenience. Our team is actively working to resolve the issue related to poor water quality.
                      </p>
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
                    <Link to={"/qualitydetails"}>
                      <a className="m-auto font-bold cursor-pointer">
                        View Quality Details
                      </a>
                    </Link>
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
                          {formatDate(previousMonthFirstDate)} -{" "}
                          {formatDate(previousMonthLastDate)}
                        </span>
                      </p>

                      <p class=" mb-2">
                        Bill Amount{" "}
                        <span className="px-2 ml-2 font-normal text-white bg-gray-400 rounded-md opacity-70">
                          Rs {billAmount}
                        </span>
                      </p>

                      <p class=" mb-2">
                        Due Date{" "}
                        <span className="px-2 ml-2 font-normal text-white bg-gray-400 rounded-md opacity-70">
                          {formatDate(dueDate)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="ml-5">
                    <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "example",
                                gatewayMerchantId: "exampleGatewayMerchantId",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "BCR2DN4T7WVMDYDN",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "FINAL",
                          totalPriceLabel: "Total",
                          totalPrice: "100.00",
                          currencyCode: "USD",
                          countryCode: "US",
                        },
                        onLoadPaymentData: (paymentRequest) => {
                          console.log("load payment data", paymentRequest);
                        },
                      }}
                      // buttonColor="blue"
                      buttonColor="white"
                      buttonType="plain"
                    />
                  </div>
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
      {showForm && <BookingForm onClose={toggleForm} />}
    </div>
  );
};

export default AdminDashboard;
