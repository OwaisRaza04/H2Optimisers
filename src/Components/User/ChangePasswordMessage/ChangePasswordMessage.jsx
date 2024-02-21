
import React from 'react';

const ForgotPasswordMessage = () => {
  return (
    <div className="flex items-center justify-center w-1/2 min-h-screen m-auto rounded-3xl">
      <div className="w-full max-w-md p-6 text-center bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Change Password</h2>
        <p className="mb-4 text-gray-700">
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
