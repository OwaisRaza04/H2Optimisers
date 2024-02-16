import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet, Link } from "react-router-dom";


const HomePage = () => {
  
  return (
    <div className='main-div'>
      
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-3xl font-bold underline'>Water Drop Tracker</h1>
        <div className=''>
          <Link to={'/login'}> <button  className='p-5 m-5 font-bold bg-green-300 border shadow-md'>Login</button></Link>
          <Link to={'/register'}> <button className='p-5 m-5 font-bold bg-blue-300 border shadow-md'>Register</button></Link>
           
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}

export default HomePage
