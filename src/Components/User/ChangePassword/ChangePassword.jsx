
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


const ChangePassword = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    console.log('Reset password for email:', email);
    const response=await fetch("http://localhost:3000/resetPassword",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email})
    })  
    if(response.ok){
      navigate("/changepasswordmessage");
    }
    else{
      navigate("/")
    }
    // Optionally, you can redirect or display a confirmation message
  };

  return (
    <div className="flex items-center justify-center w-1/2 min-h-screen m-auto rounded-3xl">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Change Password</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div><button
            type="submit"
            className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Change Password
          </button></div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;