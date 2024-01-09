import "./ExerciseCard.css"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
function ExerciseCard({ image, text, level, about, target, link = null }) {
  if (link === null) link = `/particular/${target}+${level}+${text}`
  return (
    <Link to={link} style={{ textDecoration: "none" }}> <div className="exerciseCard" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}>
      <div >
        <h3 className='exercise-list-card-text'>{text.toUpperCase()}</h3>
        <p className='exercise-list-card-p'>{about} </p>
        <div className="level">
          {(level) === "1" ?
            (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} />
              <FontAwesomeIcon icon={faBolt} /></>) :
            (level === "2") ? (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
              <FontAwesomeIcon icon={faBolt} /></>) : (level === "3") ? (<><FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
                <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} />
                <FontAwesomeIcon icon={faBolt} style={{ color: "#9f40dd" }} /></>) : ("")}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ExerciseCard
