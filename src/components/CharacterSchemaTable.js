import React from 'react'
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks'

export default function CharacterSchemaTable() {

    const all_characters_text = `
    GET https://curb-your-enthusiasm.herokuapp.com/characters

    [
        {
            "id": 91,
            "name": "Larry David",
            "actor": "Larry David",
            "image":"data:image/jpeg;base64,/9j..."
            "total_episodes": 100,
            "all_quotes": [
                "Prettaaay, prettaaay good!",
                "Know what I'm gonna call it? Latte Larry's"
            ]
        },
        {
        "id": 92,
        "name": "Jeff Garlin",
        "actor": "Jeff Greene",
        //...`

    const single_character_text = `
    
    GET https://curb-your-enthusiasm.herokuapp.com/characters/91
    
    [
        {
            "id": 91,
            "name": "Larry David",
            "actor": "Larry David",
            "image": "data:image/jpeg;base64,/9j..."
            "total_episodes": 100,
            "all_quotes": [
                "Prettaaay, prettaaay good!",
                "Know what I'm gonna call it? Latte Larry's"
            ],
            episodes": [
                {
                    "id": 761,
                    "episode": "S10E01",
                    "air_date": "January 19, 2020",
                    "title": "Happy New Year"
                },
                {
                    "id": 762,
                    "episode": "S10E02",
                    "air_date": "January 26, 2020",
                    "title": "Side Sitting"
                },
                "quotes": [
                    {
                        "id": 154,
                        "quote": "Prettaaay, prettaaay good!",
                        "character_id": 91
                    },
                    {
                        "id": 155,
                        "quote": "Know what I'm gonna call it? Latte Larry's",
                        "character_id": 91
                    }
                ]
            },
        //...
    ]`;
    
    const random_characters_text = `
    GET https://curb-your-enthusiasm.herokuapp.com/random_characters

    [
        {
            "id": 94,
            "name": "Susie Greene",
            "actor": "Susie Essman",
            "image":"data:image/jpeg;base64,/9j..."
            "total_episodes": 100,
            "all_quotes": [
                "Prettaaay, prettaaay good!",
                "Know what I'm gonna call it? Latte Larry's"
            ]
        },
        {
        "id": 98,
        "name": "Mocha Joe",
        "actor": "Savverio Guerra",
        //...
    `
    return (
        <div className="docs-container">
            <h2>Character Schema</h2>
            <table>
                    <th>Key</th>
                    <th>Type</th>
                    <th>Description</th>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>int</td>
                    <td>The id of the character.</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>string</td>
                    <td>The name of the character.</td>
                </tr>
                <tr>
                    <td>actor</td>
                    <td>string</td>
                    <td>The actor's name of the character.</td>
                </tr>
                <tr>
                    <td>image</td>
                    <td>string</td>
                    <td>The url of the character's image.</td>
                </tr>
                <tr>
                    <td>episodes</td>
                    <td>array</td>
                    <td>List of all episodes character is featured.</td>
                </tr>
                <tr>
                    <td>quotes</td>
                    <td>array</td>
                    <td>List of all quotes of character.</td>
                </tr>
            </tbody>
        </table>
        <h2>Get all characters</h2>
        <p>You can access the list of characters by using the /characters endpoint.</p>
            <CodeBlock 
                text={all_characters_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        <h2>Get singular character</h2>
        <p>You can get a single character by adding the id as a parameter: /character/2</p>
            <CodeBlock 
                text={single_character_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        <h2>Get six random characters and quotes</h2>
        <p>You can access the list of characters by using the /characters endpoint.</p>
            <CodeBlock 
                text={random_characters_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        </div>
    )
}
