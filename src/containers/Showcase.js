import React, { useState, useEffect, Component } from 'react'
import CharacterCard from '../components/CharacterCard'

// import React, { Component } from 'react';

class Showcase extends Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(characters => this.setState({characters: characters.results}))
    }

    displayCharacters = () => {
        return this.state.characters.map(character => {
            return (
                <CharacterCard character={character}/>
            )
        })
    }

    render() {
        return (
            <div className="showcase">
                {this.displayCharacters()}
            </div>
        );
    }
}

export default Showcase;

