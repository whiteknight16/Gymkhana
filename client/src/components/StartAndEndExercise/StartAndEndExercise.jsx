import React from 'react'
import { useState, useEffect } from 'react';
import "./StartAndEnd.css"
function StartAndEndExercise() {
    const [time, setTime] = useState({
        min: 0,
        sec: 0,
    });
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prev) => ({
                    ...prev,
                    sec: prev.sec + 1,
                }));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [running]);

    const start = () => {
        setRunning(true);
    };

    // This function is triggered when the timer is stopped
    const stop = () => {
        // Set the running state to false, effectively stopping the timer
        setRunning(false);

        // Create a copy of the current time state
        let storedTime = { ...time };

        // Add the current time values to the stored time
        storedTime.min += time.min;
        storedTime.sec += time.sec;

        // If the seconds are 60 or more, convert them to minutes
        if (storedTime.sec >= 60) {
            // Add the quotient of seconds divided by 60 to the minutes
            storedTime.min += Math.floor(storedTime.sec / 60);
            // Set the seconds to the remainder of seconds divided by 60
            storedTime.sec %= 60;
        }

        // Store the updated time in local storage
        localStorage.setItem('time', JSON.stringify(storedTime));

        // Reset the time state to 0 minutes and 0 seconds
        setTime({
            min: 0,
            sec: 0,
        });

        // Retrieve the count from local storage and convert it to a number, or default to 0 if it's not set
        let count = Number(localStorage.getItem('count')) || 0;

        // Increment the count
        count++;

        // Store the updated count in local storage
        localStorage.setItem('count', count.toString());
    };
    return (
        < div className='timer' >
            <button onClick={start}  >Start Exercise</button>
            {time.min}m {time.sec} s
            <button onClick={stop}> End Exercise</button >
        </div >
    )
}

export default StartAndEndExercise
