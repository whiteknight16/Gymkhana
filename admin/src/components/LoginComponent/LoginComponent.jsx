import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import conf from '../../conf/conf'
import './LoginComponent.css'

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${conf.baseURL}/api/v1/auth/login`, { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token);
            navigate('/')
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('Wrong credentials entered');
        }
    };

    return (
        <>
            <form onSubmit={handleLogin} className='login-container'>
                <h1>LOGIN</h1>
                <input type="text" placeholder="john" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="123" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </>
    );
};

export default LoginComponent;