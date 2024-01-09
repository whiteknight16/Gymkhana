import React, { useState, useEffect } from 'react'
import conf from "../../conf/conf"
import axios from 'axios'
import './AddEditDeleteCard.css'
import { Link } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';
function Add() {
    const [data, setData] = useState([]);
    const [parent, setParent] = useState(data[0]);
    const [target, setTarget] = useState('abs');
    const [level, setLevel] = useState('1');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState('');
    const [textName, setTextName] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/headings`).then(res => setData(res.data.heading))
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image || !about || !textName) {
            setError('All fields are required.')
            setSuccess(null)
            return
        }

        try {
            await axios.post(`${conf.baseURL}/api/v1/exerciseSubItems`, { parent: parent, target: target, image: image, text: textName, level: level, about: about, });
            setSuccess('Exercise added successfully')
            setError(null)
            window.location.reload()
        } catch (error) {
            setError('Error during registration: ' + error);
            setSuccess(null)
        }
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Parent:
                        <select value={parent} onChange={(e) => setParent(e.target.value)}>
                            {data.map((item) => (
                                <option key={item._id} value={item.heading}>{item.heading.toUpperCase()}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Target:
                        <select value={target} onChange={(e) => setTarget(e.target.value)}>
                            <option value="abs">Abs</option>
                            <option value="chest">Chest</option>
                            <option value="leg">Leg</option>
                            <option value="back">Back</option>
                            <option value="arm">Arm</option>
                        </select>
                    </label>
                    <label>
                        Image:
                        <input type="text" value={image} placeholder='Enter Image URL' onChange={(e) => setImage(e.target.value)} />
                    </label>
                    <label>
                        Level:
                        <select value={level} onChange={(e) => setLevel(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </label>

                    <label>
                        Text:
                        <input type="text" value={textName} onChange={(e) => setTextName(e.target.value)} />
                    </label>
                    <label>
                        About:
                        <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </>
    );
}

function EditDelete() {
    const [data, setData] = useState([])

    function handleDelete(id) {
        axios.delete(`${conf.baseURL}/api/v1/exerciseSubItems/${id}`)
    }

    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/exerciseSubItems`).then(res => setData(res.data.exerciseSubItem))
    }, [data])
    return (
        <div className='editContainer'>
            {data.map((item) => (<div key={item._id} className='items'>
                parent: {item.parent} <br />
                target: {item.target} <br />
                level: {item.level} <br />
                about: {item.about} <br />
                image: {item.image.substring(0, 20) + "...."} <br />
                text: {item.text} <br />
                <div>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                    <Link to={`/editSubItems/${item._id}`}><button>Edit</button></Link>

                </div>
            </div>))}
        </div>
    )
}




function AddEditDeleteCards() {
    const [display, setDisplay] = useState('editDelete');
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
                <div className='addEditButtons'>
                    <button onClick={() => setDisplay('add')}>Add Exercise Cards</button>
                    <button onClick={() => setDisplay('editDelete')}>Edit/Delete Exercise Cards</button>
                </div>
                {display === 'add' && <Add />}
                {display === 'editDelete' && <EditDelete />}
                <HomeButton />
            </div> : <Navigate to="/auth/login" />
    )
}

export default AddEditDeleteCards
