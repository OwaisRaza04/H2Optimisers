// Import necessary React components and hooks
import React from 'react';

// Functional component for the Confirmation Message
const ConfirmationMessage = () => {
  return (
    <div className="flex items-center justify-center w-1/2 min-h-screen m-auto rounded-3xl">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Registration Successful!</h2>
        <p className="mb-4 text-gray-700">
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
