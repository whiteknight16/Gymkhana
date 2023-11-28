import React, { useEffect, useState } from 'react'
import conf from '../../conf/conf'
import axios from 'axios'
import "./CustomRoutine.css"
import { useNavigate } from 'react-router-dom'
import ExerciseEle from '../ExerciseEle/ExerciseEle'




function ExerciseLoader({ name, gif, reps, video, cal }) {
    const navigate = useNavigate()
    const clickHandler = () => {
        // Create an array with the props
        const exerciseData = [name, gif, reps];

        // Get the current data from local storage
        const currentData = JSON.parse(localStorage.getItem('customExercise')) || [];

        // Add the new data to the current data
        currentData.push(exerciseData);

        // Store the updated data in local storage
        localStorage.setItem('customExercise', JSON.stringify(currentData));

        navigate('/customroutine')
    }
    return (


        <>
            <ExerciseEle name={name} gif={gif} reps={reps} video={video} cal={cal} />
            <div style={{ display: "flex", justifyContent: "center" }}><button className='exerciseAdd' onClick={clickHandler}>Add</button></div>
        </>

    )
}


function CustomRoutine() {

    const [type, setType] = useState('all');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`${conf.baseURL}/api/v1/exerciselist`);
            setData(result.data.exercise);
        };

        fetchData();
    }, []);

    const filteredData = type === 'all' ? data : data.filter(item => item.target === type);

    return (
        <div>
            <div className='buttons'>
                <button className="buttons" onClick={() => setType('all')}>All</button>
                <button className="buttons" onClick={() => setType('abs')}>Abs</button>
                <button className="buttons" onClick={() => setType('chest')}>Chest</button>
                <button className="buttons" onClick={() => setType('legs')}>Legs</button>
            </div>
            {filteredData.map(ele => (
                <ExerciseLoader key={ele._id} name={ele.name} gif={ele.gif} reps={ele.reps} video={ele.video} cal={ele.cal} />
            ))}
        </div>
    );
}


export default CustomRoutine
