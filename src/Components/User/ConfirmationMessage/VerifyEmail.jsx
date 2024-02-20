// Import necessary React components and hooks
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Functional component for the Confirmation Message
const VerifyEmail = () => { 
    const navigate=useNavigate();
    const token = localStorage.getItem("token");

    useEffect(()=>{
        const verifyEmail = async () => { 
            const response = await fetch("http://localhost:3000/verifyEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({token}),
            })
            console.log("RESPONSE")
            console.log(response.ok)
            if (response.ok) {
                navigate("/mainpage");
                console.log("OK")
            }
            else {
                navigate("/register")
                console.log("NOT OK")
            }
        } 
        verifyEmail()
    },[]);
    return(
        <h1>Email is verifying</h1>
    )
    
};
export default VerifyEmail;