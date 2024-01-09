import React, { useEffect, useState } from 'react'
import axios from 'axios'
import conf from "../../conf/conf"
import "./AddEditDeleteHeadings.css"
import HomeButton from '../HomeButton/HomeButton'
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

function AddEditDeleteHeadings() {
    const [data, setData] = useState([])
    const [editing, setEditing] = useState(null)
    const [editValue, setEditValue] = useState('')
    const [adding, setAdding] = useState(false)
    const [addValue, setAddValue] = useState('')

    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/headings`).then(res => setData(res.data.heading))
    }, [data])

    const handleSave = async (id) => {
        try {
            const response = await axios.patch(`${conf.baseURL}/api/v1/headings`, {
                id,
                heading: editValue
            });
            setEditing(null)
            if (response.data.heading) {
                console.log("Success")
                window.location.reload()
            }
            else {
                console.log("None with that id ")
            }
        } catch (error) {
            console.log(error)
        }
    };


    const handleAdd = () => {
        try {
            axios.post(`${conf.baseURL}/api/v1/headings`, { heading: addValue })
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }

    const handleOnClick = async (id) => {
        try {
            await axios.delete(`${conf.baseURL}/api/v1/headings/${id}`)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
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
            <div>
                {data.map(ele => (
                    <div className='main-style' key={ele._id}>
                        {editing === ele._id ? (
                            <div >
                                <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                                <button onClick={() => handleSave(ele._id)}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{ele.heading}</h3>
                                <button onClick={() => { setEditing(ele._id); setEditValue(ele.heading); }}>Edit</button>
                            </div>
                        )}
                        <button onClick={() => handleOnClick(ele._id)}>Delete</button>
                    </div>
                ))}
                {adding && (
                    <>
                        <input value={addValue} onChange={(e) => setAddValue(e.target.value)} />
                        <button onClick={handleAdd}>Save</button>
                    </>
                )}
                <button onClick={() => setAdding(true)} className='add'>Add+</button>
                <HomeButton />
            </div> : <Navigate to="/auth/login" />
    )
}

export default AddEditDeleteHeadings