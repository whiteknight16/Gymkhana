import React from 'react'
import { useState } from 'react'
import "./Card.css"
function Card({ children, image, message }) {
    const [days, setDays] = useState(0)
    return (
        <div className='card' style={{ backgroundImage: `url(${image})` }}>
            <h3 className='card-h3'>{children}</h3>
            {(days === 0) ? (<p className='card-p'>{message}</p>) : (<h2 className='card-h2'>Day:`${days}`</h2>)}
            <button className='card-button'>Start</button>
        </div>
    )
}

export default Card
