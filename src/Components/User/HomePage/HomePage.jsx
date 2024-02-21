import React from "react";
import Footer from "../Footer/Footer";
import "./HomePage.css";
import { Outlet, Link } from "react-router-dom";
import waterDrop from "../../../../public/images/waterDrop.png";
import mobile from "../../../../public/images/mobile.png";

const HomePage = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center gap-[10rem] m-[5rem]">
        <div className="mt-[5rem]">
          <div className="flex justify-center gap-3">
            <img className="w-[3rem]" src={waterDrop} alt="" />
            <h1 className="text-2xl font-bold">Drops Water Tracker</h1>
          </div>
          <div className="mt-[3rem] text-4xl font-bold tracking-wide ml-[5rem]">
            <h1>Water Tracker App </h1>
            <h1>and Reminder App</h1>
          </div>
          <div className="flex justify-center ml-[4rem] mt-5">
            <Link to={"/login"}>
              {" "}
              <button className="px-10 py-2 m-5 font-bold text-white bg-green-400 border rounded-lg shadow-md">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              {" "}
              <button className="px-10 py-2 m-5 font-bold text-white bg-blue-400 border rounded-lg shadow-md">
                Register
              </button>
            </Link>
          </div>
          
        </div>

        <div>
          <img src={mobile} alt="" className="w-[12rem] mt-10" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// {

// }
