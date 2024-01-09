import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
function Start() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);

    // A use effect to check if logged in
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            const tokenExpiration = decodedToken.exp;
            const currentTimestamp = Math.floor(Date.now() / 1000);

            if (tokenExpiration >= currentTimestamp) {
                setIsAuthenticated(true);
            }
        }

        setIsCheckingToken(false);
    }, []);

    if (isCheckingToken) {
        return <div>Checking token...</div>;
    }

    return (
        // renders page if logged in send to login page if not logged in 
        isAuthenticated ?
            <div className='start-buttons'>
                <Link to="/exercise"><button className='start-button'>CRUD Exercise</button></Link>
                <Link to="/headings"><button className='start-button'>CRUD Headings</button></Link>
                <Link to="/cards"><button className='start-button'>CRUD Exercise Cards</button></Link>
            </div> : <Navigate to="/auth/login" />
    )
}

export default Start
