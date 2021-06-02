import React from 'react';
import Home from '../pages/Home'
import Docs from '../pages/Docs';
import About from '../pages/About';

export default function Main(props) {
    const displayContainer = () => {
        if (props.display === "home") {
            return <Home />
        } else if (props.display == "docs") {
            return <Docs />
        } else if (props.display == "about"){
            return <About />
        }        
    }

    return (
        <main>
            {displayContainer()}
        </main>
    )
}


