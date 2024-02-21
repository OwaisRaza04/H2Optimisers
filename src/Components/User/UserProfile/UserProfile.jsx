import React, { useState, useEffect } from 'react';
import Header from "../Header/Header"
import { Link } from 'react-router-dom';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const mail=localStorage.getItem('mail');

  useEffect(() => {
    
    const fetchUserData = async () => {
        try { 
            const response = await fetch("http://localhost:3000/getuserdata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({mail}),
            }) 
    
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json(); 
          setUserData(userData.user);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
    fetchUserData();
  }, []);

  
  return (
    <div className='h-screen overflow-hidden bg-blue-100'>
      <Header />  
      <div>
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-4xl px-4 py-8 bg-blue-100 sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
              <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and contact information.</p>
            </div>
            <div className="border-t border-gray-200">
              {userData && (
                <dl>
                  <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full Name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userData.fullName}</dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userData.email}</dd>
                  </div>
                  <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Mobile Number</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userData.mobileNumber}</dd>
                  </div>
                  <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Meter ID</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{userData.meterId}</dd>
                  </div>
                </dl>
              )}
            </div>
            <div className="px-4 py-3 sm:px-6">
             
               
                <Link to={'/changepassword'}>  <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Change Password</button></Link>
              
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserProfile;