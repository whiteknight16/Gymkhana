import "./ExerciseCard.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
function ExerciseCard({ image, text, level, link }) {
  const navigate = useNavigate();
  return (
    <div className="exerciseCard" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }} onClick={() => navigate(link)}>
      <div >
        <h3 className='exercise-list-card-text'>{text}</h3>
        <p className='exercise-list-card-p'>Lorem ipsum dolor sit </p>
        <div className="level">
          {(level) === 1 ?
            (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} />
              <FontAwesomeIcon icon={faBolt} /></>) :
            (level === 2) ? (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} /></>) : (level === 3) ? (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
                <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
                <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} /></>) : ("")}
        </div>
      </div>
    </div>
  )
}

export default ExerciseCard
