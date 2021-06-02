import React from 'react'
import curbLogo from '../images/curb_logo512.png'

export default function NavBar() {
    return (
    <nav className="navbar">
        <a href="#">    
            <img 
                src={ curbLogo } 
                alt="curb-logo" 
                className="curb-logo"
                href="#"
            />
        </a>
        <ul className="navbar-list">
            <li>
                <a className="navbar-link" href="#">
                    <h2>Docs</h2>
                </a>
            </li>
            <li>
                <a className="navbar-link" href="#">
                    <h2>About</h2>
                </a>
            </li>
        </ul>
    </nav>
    )
}
