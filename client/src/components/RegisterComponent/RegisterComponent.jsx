import React, { useState, useEffect } from 'react';
import axios from 'axios';
import conf from '../../conf/conf'
import './RegisterComponent.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"

function Component() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const route = useNavigate()
    // checks condition for a valid registration
    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${conf.baseURL}/api/v1/auth/reg`, { username, password });
            console.log('Registration successful');
            route("/discoverlog")
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <form className='register-container'>
            <h1>CREATE ACCOUNT</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </form>
    );

}

const RegisterComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);

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
        isAuthenticated ? <Component /> : <Navigate to="/auth/login" />
    )
};



export default RegisterComponent;
