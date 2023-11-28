import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faCompass, faStopwatch } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer'>
            <Link to="/" className="link">
                <div className='footer-item'>
                    <FontAwesomeIcon icon={faStopwatch} />
                    <p>Training</p>
                </div>
            </Link>

            <Link to="/discover" className="link">
                <div className='footer-item'>
                    <FontAwesomeIcon icon={faCompass} />
                    <p>Discover</p>
                </div>
            </Link>

            <Link to="/report" className="link">
                <div className='footer-item'>
                    <FontAwesomeIcon icon={faChartSimple} />
                    <p>Report</p>
                </div>
            </Link>
        </div>
    )
}

export default Footer
