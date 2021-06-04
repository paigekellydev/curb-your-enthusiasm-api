import React, { useState, useEffect, Component } from 'react'
import CharacterCard from '../components/CharacterCard'

// import React, { Component } from 'react';

class Showcase extends Component {

    state = {
        characters: []
    }

    componentDidMount() {
        fetch('https://curb-your-enthusiasm.herokuapp.com/random_characters')
            .then(response => response.json())
            .then(characters => this.setState({characters: characters}))
    }

    displayCharacters = () => {
        return this.state.characters.map(character => {
            return (
                <CharacterCard character={character} key={character.id}/>
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

