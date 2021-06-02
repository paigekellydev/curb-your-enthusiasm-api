import React from 'react'
import NavBar from '../components/NavBar'

export default function Header(props) {
    return (
        <header display={props.display}>
            <NavBar handleOnClick={props.handleOnClick} />
        </header>
    )
}
