import React from 'react'
import Showcase from '../containers/Showcase'
import larryLogo from '../images/larry.jpeg'


export default function Home() {
    return (
        <div className="title-section">
            <h1>The Curb Your Enthusiasm API</h1>
            <section className="larry-section"></section>
            <Showcase className="showcase"/>
        </div>
    )
}
