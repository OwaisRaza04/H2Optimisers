// Import necessary React components and hooks
import React from 'react';

// Functional component for the Forgot Password Confirmation Message
const ForgotPasswordMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <p className="text-gray-700 mb-4">
          An email has been sent to the provided address with instructions on how to reset your password.
        </p>
        <p className="text-gray-500">
          Please check your email and follow the instructions. If you don't receive an email, please check your spam folder.
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordMessage;
