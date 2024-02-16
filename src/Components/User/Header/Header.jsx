import React, { useState, useEffect } from 'react';
import { HiUser, HiBell, HiChartBar, HiHome } from 'react-icons/hi'; // Import icons from react-icons


const Navbar = () => {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }

    // For demonstration purposes, replace 'John Doe' with the actual user's name
    setName('John Doe');
  }, []);

  return (
    <div className="flex justify-between items-center bg-blue-400 p-4 text-white">
      <div>
        <p className="text-lg font-bold">{greeting}</p>
        <p>{name}</p>
      </div>

      <div className="flex items-center space-x-4">
      <HiHome className="text-2xl cursor-pointer" />
      <HiChartBar className="text-2xl cursor-pointer" />
      <HiBell className="text-2xl cursor-pointer" />
        <HiUser className="text-2xl cursor-pointer" />
       
    
        
      </div>
    </div>
  );
};

export default Navbar;
