// Import necessary React components and hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ConfirmationMessage from "../ConfirmationMessage/ConfirmationMessage";

// Functional component for the Register page
const RegisterPage = ({ onLoginClick }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigate();
  // State to store the user's input
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    meterId: "",
    password: "",
  });

  // Function to handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // return response.json();
  };

  // Function to handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // You can add registration logic here
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log("Form submitted with data:", formData);
    // Reset the form after submission

    // console.log(data = await response.json());
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      // const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("mail", formData.email);
      localStorage.setItem('username',formData.username)
      navigate("/confirmationmessage");
    } else {
      setAlertVisible(true);
      console.log("User Exists");
    }
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      meterId: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center w-1/2 min-h-screen m-5 m-auto rounded-3xl">
      <div className="absolute w-1/3 m-3 top-3">
        {alertVisible && (
          <div className="text-red-600 alert" id="alert">
            User Already Exists!
            <span className="cursor-pointer closebtn" onClick={() => setAlertVisible(false)}>
              &times;
            </span>
          </div>
        )}
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex gap-5">
            <div className="mb-4">
              <label
                htmlFor="mobileNumber"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Mobile Number:
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="meterId"
                className="block mb-2 text-sm font-bold text-gray-700"
              >
                Meter ID:
              </label>
              <input
                placeholder="acb-49-3cd"
                type="text"
                id="meterId"
                name="meterId"
                value={formData.meterId}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <span className="ml-0 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"}>
              <button
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={onLoginClick}
              >
                Login
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
