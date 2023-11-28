import React from 'react'
import "./Header.css"

function Header({ children }) {
    return (
        <div>
            <h1 className="header">{children}</h1>
        </div>
    )
}

export default Header
