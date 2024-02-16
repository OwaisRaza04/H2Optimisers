// Import necessary React components and hooks
import React from 'react';

// Functional component for the Confirmation Message
const ConfirmationMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Registration Successful!</h2>
        <p className="text-gray-700 mb-4">
          A confirmation link has been sent to your registered email address.
          Please check your email and follow the instructions to complete the registration process.
        </p>
        <p className="text-gray-500">
          If you didn't receive the email, please check your spam folder.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationMessage;
