import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [alertVisible,setAlertVisible]=useState(false);
  const navigate = useNavigate();
  // State to store the user's input (email and password)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.email == 'samarthurane3201@gmail.com' && formData.password == 'Samarth') {
      navigate("/admindashboard")
      
    }
    else {
      setAlertVisible(true)
      console.log("Invalid Credentials")
      
    }
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex items-center justify-center w-1/2 min-h-screen m-5 m-auto rounded-3xl">

      <div className='absolute w-1/3 m-3 top-3'>
        {alertVisible && (
          <div className="text-red-600 alert" id="alert">
            Wrong Credentials!
            <span className="cursor-pointer closebtn" onClick={() => setAlertVisible(false)}>
              &times;
            </span>
          </div>
        )}
      </div>

      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Admin Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-white transition duration-300 bg-blue-400 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        {/* <Link to={'/forgotpassword'}><p className='mb-5 text-gray-500 cursor-pointer font-sm opacity-60'>Forgot Passsword</p></Link> */}
        {/* <p>Don't have an account ?<Link to={'/register'}> <span className='text-blue-500 cursor-pointer '> Register</span></Link></p> */}
        
      </div>
    </div>
  );
};

export default AdminLogin;