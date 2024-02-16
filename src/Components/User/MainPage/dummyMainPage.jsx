// Import necessary React components and hooks
import React, { useEffect, useState } from 'react';

// Functional component for the Main Page
const MainPage = () => {
    // State to store the user's information
    const [userData, setUserData] = useState(null);

    // Effect to run when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');
            console.log(token);

            // If the token exists, you can use it to make authenticated requests to your server
            if (token) {
                try { 
                    const response = await fetch("http://localhost:3000/authenticate", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json", // Set the content type
                        },
                        body: JSON.stringify({ token }),
                    });

                    if (response.ok) {
                        const data = await response.json();  
                        setUserData(data.email); 
                    } else {
                        console.log("Server response not okay:", response.status);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs only once


    return (
        <div>
            <h2>Main Page</h2>
            {userData ? (
                <div>
                    <p>Welcome, {userData}!</p>
                    {/* Display other user information as needed */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

export default MainPage;
