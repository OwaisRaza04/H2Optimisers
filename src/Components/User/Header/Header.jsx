import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiUser, HiBell, HiChartBar, HiHome } from "react-icons/hi"; // Import icons from react-icons

const Navbar = () => {
  const [greeting, setGreeting] = useState("");
  const name = localStorage.getItem("username");

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    console.log(currentHour);
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center justify-between p-4 text-white bg-blue-400 md:flex-row md:justify-between">
      <div className="mb-4 ml-0 text-center sm:mb-0">
        <p className="text-lg font-bold">{greeting}</p>
        <p>{name}</p>
      </div>

      <div className="flex items-center gap-5 space-x-4 md:mr-[3.5rem] mr-0">
        <Link to={"/mainpage"}>
          {" "}
          <HiHome className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/alldata"}>
          <HiChartBar className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/notifications"}>
          <HiBell className="text-2xl cursor-pointer" />
        </Link>
        <Link to={"/userprofile"}>
          <HiUser className="text-2xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
