import React from 'react'
import NavBar from '../components/NavBar'

export default function Header(props) {
    console.log(props)
    return (
        <header>
            <NavBar 
               handleOnClick={props.handleOnClick}
            />
        </header>
    )
}
