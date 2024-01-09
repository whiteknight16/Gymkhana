import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import conf from '../../conf/conf';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

import Edit from './Edit';
function EditCardComponent() {

    const [data, setData] = useState([]);
    const [item, setItem] = useState({})
    const [heading, setHeading] = useState([])
    const [isLoading, setIsLoading] = useState(true);
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

        axios.get(`${conf.baseURL}/api/v1/headings`).then(res => setHeading(res.data.heading))
        const id = window.location.pathname.split('/editSubItems')[1].split("/")[1]
        axios.get(`${conf.baseURL}/api/v1/exerciseSubItems`).then(res => {
            setData(res.data.exerciseSubItem);
            const foundItem = res.data.exerciseSubItem.find(ele => ele._id === id);
            if (foundItem) {
                setItem(foundItem);
            }
            setIsLoading(false); // Set loading to false after the data has been loaded
        })
    }, [])

    if (isLoading) {
        return <div>Loading...</div>; // Render a loading message while the data is loading
    }




    if (isCheckingToken) {
        return <div>Checking token...</div>;
    }

    return (
        // renders page if logged in send to login page if not logged in 
        isAuthenticated ?
            <Edit p={item.parent} t={item.target} l={item.level} a={item.about} i={item.image} text={item.text} id={item._id} heading={heading} /> : <Navigate to="/auth/login" />
    )
}


export default EditCardComponent