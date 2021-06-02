import React, { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'

export default function Showcase() {

    const [characters, setCharacters] = useState({})

    // useEffect(() => {
    //     fetch('https://rickandmortyapi.com/api/character/477')
    //     .then(response => response.json())
    //     .then(character => setCharacters(character))
    // })

    const displayCharacters = () => {
        // characters.map(character => {
        //     <h1>{character.name}</h1>
        //     <img {character.name}/>
        //     <h1>{character.name}</h1>
        // })
        return (
            <CharacterCard />
        )
    }

    return (
        <section className="showcase">
            {displayCharacters()}
        </section>
    )
}
