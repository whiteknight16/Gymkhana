import React, { useState } from 'react'
import "./Stats.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faMedal, faStopwatch } from "@fortawesome/free-solid-svg-icons"
function Stats() {
    const [count, setCount] = useState(localStorage.getItem('count') || 0)
    const [cal, setCal] = useState(Number(localStorage.getItem('cal')) || 0)
    let initialTime;
    try {
        initialTime = JSON.parse(localStorage.getItem('time')) || { min: 0, sec: 0 };
    } catch (error) {
        initialTime = { min: 0, sec: 0 };
    }
    const [time, setTime] = useState(initialTime)

    return (
        <div className='stats'>
            <div className='stats-item'>
                <FontAwesomeIcon icon={faMedal} />
                {count}
                <p>Workouts</p>
            </div>
            <div className='stats-item'>
                <FontAwesomeIcon icon={faFire} />
                {cal}
                <p>cal</p>
            </div>
            <div className='stats-item'>
                <FontAwesomeIcon icon={faStopwatch} />
                {time.min}m {time.sec}s
                <p>Time</p>
            </div>

        </div>
    )
}

export default Stats
