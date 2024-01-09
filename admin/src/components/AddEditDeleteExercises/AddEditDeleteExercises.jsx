import React, { useEffect, useState } from 'react'
import "./AddEditDeleteExercises.css"
import axios from 'axios'
import conf from "../../conf/conf"
import { Link } from 'react-router-dom'
import HomeButton from '../HomeButton/HomeButton'
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

function Add() {
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [reps, setReps] = useState('');
    const [target, setTarget] = useState('');
    const [gif, setGif] = useState('');
    const [video, setVideo] = useState('');
    const [cal, setCal] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !reps || !gif || !video || !cal) {
            setError('All fields are required.')
            return
        }

        try {
            await axios.post(`${conf.baseURL}/api/v1/exerciselist`, { name, level: level.toString(), reps: reps.toString(), target, gif, video, cal: cal.toString() });
            setSuccess('Exercise added successfully')
        } catch (error) {
            setError('Error during registration:', error);
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
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
                    Reps:
                    <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
                </label>
                <label>
                    Target:
                    <select value={target} onChange={(e) => setTarget(e.target.value)}>
                        <option value="abs">Abs</option>
                        <option value="chest">Chest</option>
                        <option value="leg">Legs</option>
                        <option value="back">Back</option>
                        <option value="arm">Arm</option>
                        <option value="all">All</option>
                    </select>
                </label>
                <label>
                    Gif:
                    <input type="text" value={gif} onChange={(e) => setGif(e.target.value)} />
                </label>
                <label>
                    Video:
                    <input type="text" value={video} onChange={(e) => setVideo(e.target.value)} placeholder='Enter Embedable Link' />
                </label>
                <label>
                    Calories:
                    <input type="number" value={cal} onChange={(e) => setCal(e.target.value)} />
                </label>
                <button type="submit" value="Submit" >Submit</button>
            </form>
            {success && <p style={{ color: "green" }}>{success}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    );
}

function EditDelete() {
    function handleDelete(id) {
        axios.delete(`${conf.baseURL}/api/v1/exerciselist/${id}`)
    }

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${conf.baseURL}/api/v1/exerciselist`).then(res => setData(res.data.exercise))
    }, [data])
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: "column", marginTop: "10px" }}>
            {data.map(ele => <div className='eachExercise' key={ele._id}>
                <h3>Cal:{ele.cal}</h3>
                <h3>GIF URL:{ele.gif.substring(0, 20)}....</h3>
                <img src={ele.gif} />
                <h3>Level:{ele.level}</h3>
                <h3>Name:{ele.name}</h3>
                <h3>Reps:{ele.reps}</h3>
                <h3>Target:{ele.target}</h3>
                <h3>Video URL:{ele.video.substring(0, 20)}....</h3>
                <iframe src={ele.video} frameBorder={0}></iframe>

                <div className='buttons'>
                    <Link to={`/edit/${ele._id}`}><button>Edit</button> </Link>
                    <button onClick={() => handleDelete(ele._id)}>Delete</button>
                </div>
            </div>)}
        </div>
    )
}

function AddEditDeleteExercises() {
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
                    <button onClick={() => setDisplay('add')}>Add Exercise</button>
                    <button onClick={() => setDisplay('editDelete')}>Edit/Delete Exercise</button>
                </div>
                {display === 'add' && <Add />}
                {display === 'editDelete' && <EditDelete />}
                <HomeButton />
            </div> : <Navigate to="/auth/login" />
    )
}

export default AddEditDeleteExercises