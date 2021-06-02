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
        <a className="navbar-link" onClick={handleOnHome}>  
            <img 
                src={ curbLogo } 
                alt="curb-logo" 
                className="curb-logo"
            />
        </a>
        <ul className="navbar-list">
            <li>
                <a className="navbar-link" onClick={handleOnDocs}>
                    <h2>Docs</h2>
                </a>
            </li>
            <li>
                <a className="navbar-link" onClick={handleOnAbout}>
                    <h2>About</h2>
                </a>
            </li>
        </ul>
    </nav>
    )
}
