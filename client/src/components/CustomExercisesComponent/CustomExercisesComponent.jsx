import React from 'react'
import { useState, useEffect } from 'react';
import ExerciseEle from '../ExerciseEle/ExerciseEle';
import "./CustomExercisesComponent.css"
import { Link } from 'react-router-dom';
function CustomExercisesComponent() {
    const [data, setData] = useState(() => {
        // Fetches from local storage
        const localData = localStorage.getItem('customExercise');
        return JSON.parse(localData) || [];
    });

    return (
        <div>
            {data.map((ele, index) => <ExerciseEle key={index} name={ele[0]} gif={ele[1]} reps={ele[2]} video={ele[3]} cal={ele[4]} />)}
            <Link to="/customAdd"><button className='customExerciseButton'>+</button></Link>
        </div>
    );
}

export default CustomExercisesComponent
