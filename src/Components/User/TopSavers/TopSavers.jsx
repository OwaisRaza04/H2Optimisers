import React from "react";
import './TopSavers.css';
import waterDropImage from "../../../../public/images/waterDrop.png";
import userProfileIcon01 from "../../../../public/images/recent-user-1.png";
import userProfileIcon02 from "../../../../public/images/recent-user-2.png";
import userProfileIcon03 from "../../../../public/images/recent-user-3.png";
import userProfileIcon04 from "../../../../public/images/recent-user-4.png";

const TopSavers = () => {
  return (
    <div className='relative w-full p-5 bg-white border shadow-lg rounded-xl'>
      <img className='absolute top-0 left-0 w-10 h-8' src={waterDropImage} alt="" />
      <h1 className='ml-12 text-xl font-bold '>Top Savers</h1>
      
      <div className='w-full px-5 mt-10 overflow-y-auto'>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon02}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais Raza</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>889Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon01}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais Raza</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>889Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon03}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais Raza</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>889Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon04}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais Raza</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>889Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
        <div className='flex items-center justify-between px-5 mb-8 user-row'>
            <img src={userProfileIcon02}  alt="" />
            <p className='text-lg font-bold' style={{color: '#158df7'}}>Owais Raza</p>
            <span className='px-3 py-1 text-white bg-blue-400 rounded-lg'>889Ltr/Mon</span>
            <p style={{color: '#158df7'}}>owaisraza7297@gmail.com</p>
        </div>
      </div>
      

        
    </div>
  );
};

export default TopSavers;
