import React, { useEffect, useState } from 'react'
import axios from 'axios'
import conf from "../../conf/conf"
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { Navigate } from 'react-router-dom';

function ParentComponent() {
    const [data, setData] = useState([]);
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add a loading state
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingToken, setIsCheckingToken] = useState(true);

    const id = window.location.pathname.split('/edit/')[1];

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
        axios.get(`${conf.baseURL}/api/v1/exerciselist`).then(res => {
            setData(res.data.exercise)
            const foundItem = res.data.exercise.find(ele => ele._id == id); // Find foundItem in res.data.exercise directly
            if (foundItem) {
                setItem(foundItem);
            }
            setIsLoading(false);
        })
    }, []);
    if (isLoading) {
        return <div>Loading...</div>; // Render a loading message while the data is loading
    }
   
    if (isCheckingToken) {
        return <div>Checking token...</div>;
    }

    return (
        // renders page if logged in send to login page if not logged in 
        isAuthenticated ?
       ( <EditComponent n={item.name} l={item.level} r={item.reps} t={item.target} g={item.gif} v={item.video} c={item.cal} id={item._id} />):( <Navigate to="/auth/login" />)
    )
}

function EditComponent({ n, l, r, t, g, v, c, id }) {


    const [name, setName] = useState(n)
    const [level, setLevel] = useState(l)
    const [reps, setReps] = useState(r)
    const [target, setTarget] = useState(t)
    const [gif, setGif] = useState(g)
    const [video, setVideo] = useState(v)
    const [cal, setCal] = useState(c)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        axios.patch(`${conf.baseURL}/api/v1/exerciselist`, {
            id,
            name,
            level,
            reps,
            target,
            gif,
            video,
            cal
        }).then(res => {
            if (res.data.exercise) {
                navigate("/exercise")
                setError('')
            }
            else {
                setError("Error")
                setSuccess('')
            }
        })
    }

    useEffect(() => {
        setName(n)
        setLevel(l)
        setReps(r)
        setTarget(t)
        setGif(g)
        setVideo(v)
        setCal(c)
    }, [n, l, r, t, g, v, c])

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
                        <option value="legs">Legs</option>
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
    )
}

export default ParentComponent