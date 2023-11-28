import React from "react"
import { useState } from "react"
import "./ExerciseEle.css"


function ExerciseDetails({ video }) {
    return (
        <div className="details">
            <p>Fugiat incididunt et officia culpa nisi nisi nostrud fugiat nostrud nostrud occaecat.</p>
            <iframe src={video} frameborder="0"></iframe>
        </div>
    )
}

function ExerciseEle({ name, reps, gif, video, cal }) {
    const [isVisible, setIsVisible] = useState(false)
    const [isStriked, setIsStriked] = useState(false)

    const clickHandler = () => {
        setIsVisible(!isVisible)

    }

    function onClickHandeler() {
        setIsStriked(!isStriked)
        let existingCal = Number(localStorage.getItem('cal')) || 0;
        let calValue = Number(cal) || 0;
        let newCal = existingCal + calValue;
        localStorage.setItem('cal', newCal.toString());
    }


    return (
        <>
            <div className={`exerciseCard ${isStriked ? 'striked' : ''}`} onClick={clickHandler}>
                <img src={gif} alt="exercise gif" />
                <div className="exerciseData">
                    <h3>{name}</h3>
                    <p>{reps}</p>
                </div>
            </div>
            {(window.location.pathname === '/customAdd') ? "" : <div style={{ display: "flex", justifyContent: "center" }}><button onClick={onClickHandeler}>✅</button ></div>}
            {isVisible && <ExerciseDetails video={video} />
            }
        </>
    )
}
export default ExerciseEle
