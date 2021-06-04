import React from 'react'

export default function CharacterCard({character}) {

    const random_quote = () => {
        const quotes = character.all_quotes
        const random_quote = quotes[Math.floor(Math.random() * quotes.length)]
        return random_quote
    }

    return (
        <div className="character-card">
            <section>
                <div className="speech-bubble">
                    <div className="arrow bottom right"></div>
                        {random_quote()}
                    </div>
                    <img 
                            src={character.image}
                            alt={character}
                            className="character-card-image"
                    />
            </section>
            <section className="character-info">
                <h2>{character.name}</h2>
                <p>Played by: {character.actor}</p>
                <p>Featured in {character.total_episodes} episodes</p>
            </section>
        </div>
    )
}
