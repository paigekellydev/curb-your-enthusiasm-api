import React from 'react'
import curbLogo from '../images/curb_logo512.png'

export default function NavBar(props) {

    const handleOnHome = (event) => {
        props.handleOnClick("home")
    }

    const handleOnDocs = (event) => {
        props.handleOnClick("docs")
    }

    const handleOnAbout = (event) => {
        props.handleOnClick("about")
    }
    return (
    <nav className="navbar">
        <button onClick={handleOnHome}>    
            <img 
                src={ curbLogo } 
                alt="curb-logo" 
                className="curb-logo"
            />
        </button>
        <ul className="navbar-list">
            <li>
                <button className="navbar-link" onClick={handleOnDocs}>
                    <h2>Docs</h2>
                </button>
            </li>
            <li>
                <button className="navbar-link" onClick={handleOnAbout}>
                    <h2>About</h2>
                </button>
            </li>
        </ul>
    </nav>
    )
}
