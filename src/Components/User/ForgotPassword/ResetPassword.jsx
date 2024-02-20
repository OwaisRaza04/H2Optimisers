// Import necessary React components and hooks
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'; 

// Functional component for the Reset Password page
const ResetPassword = () => {
  const navigate=useNavigate()
  // State to store the user's input (newPassword and confirmPassword)
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  // Function to handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle the form submission
  const handleFormSubmit = async(e) => {
    e.preventDefault();
    if(formData.newPassword!=formData.confirmPassword){
      console.log("Password and Confirm Password not matched")
      setFormData({
        newPassword: '',
        confirmPassword: '',
      });
      return;
    }
    const token = localStorage.getItem('token');
    console.log('New Password:', formData.newPassword);
    console.log('Confirm Password:', formData.confirmPassword);
    const response=await fetch("http://localhost:3000/newPass",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({token:token,newPass:formData.newPassword})
    })  
    if(response.ok){
      navigate("/mainpage");
    }
    else{
      navigate("/")
    }
    // Optionally, you can redirect or display a confirmation message
    // Reset the form after submission
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Reset Password</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2 text-sm font-bold text-gray-700">
              New Password:
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-bold text-gray-700">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white transition duration-300 bg-purple-500 rounded-md hover:bg-purple-600"
          >
            Change Password
          </button> 
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
