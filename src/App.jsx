import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/User/HomePage/HomePage";
import Footer from "./Components/User/Footer/Footer";
import VerifyEmail from "./Components/User/ConfirmationMessage/VerifyEmail";
import Login from "./Components/User/Login/Login";
import Register from "./Components/User/Register/Register";
import ConfirmationMessage from "./Components/User/ConfirmationMessage/ConfirmationMessage";
import ForgotPassword from "./Components/User/ForgotPassword/ForgotPassword";
import ForgotPasswordMessage from "./Components/User/ForgotPassword/ForgotPasswordMessage";
import ResetPassword from "./Components/User/ForgotPassword/ResetPassword";
import MainPage from "./Components/User/MainPage/MainPage";  
import ConsumptionDetails from "./Components/User/ConsumptionDetails/ConsumptionDetails";
import QualityDetails from "./Components/User/QualityDetails/QualityDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/confirmationmessage" element={<ConfirmationMessage />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/forgotpasswordmessage" element={<ForgotPasswordMessage />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/verifyEmail" element={<VerifyEmail/>} />

        </Routes>
      </BrowserRouter>
      <MainPage />
      {/* <ConsumptionDetails /> */}
      {/* <QualityDetails />  */}
    </>
  );
}

export default App;
