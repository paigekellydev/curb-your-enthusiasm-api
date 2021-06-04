import React from 'react'
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks'

export default function CharacterSchemaTable() {

    const all_quotes_text = `
    GET https://curb-your-enthusiasm.herokuapp.com/quotes

    [
        {
            "id": 91,
            "name": "Larry David",
            "actor": "Larry David",
            "image":"data:image/jpeg;base64,/9j..."
            "all_quotes": [
                "Prettaaay, prettaaay good!",
                "Know what I'm gonna call it? Latte Larry's"
            ]
        },
        {
            "id": 155,
            "name": "Larry David",
            "actor": "Larry David",
            "image":"data:image/jpeg;base64,/9j..."
            "all_quotes": [
                Know what I'm gonna call it? Latte Larry's"
            ]
        },
        {
        "id": 92,
        "name": "Jeff Garlin",
        "actor": "Jeff Greene",
        //...`

    const single_quote_text = `
    
    GET https://curb-your-enthusiasm.herokuapp.com/quotes/155
    
    [
        {
            "id": 154,
            "quote": "Prettaaay, prettaaay good!",
            "character_id": 91,
            "character": {
                "id": 91,
                "name": "Larry David",
                "actor": "Larry David",
                "image": "data:image/jp..."
                
        }, 
    ]`;
    return (
        <div className="docs-container">
            <h2>Quote Schema</h2>
            <table>
                    <th>Key</th>
                    <th>Type</th>
                    <th>Description</th>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>int</td>
                    <td>The id of the quote.</td>
                </tr>
                <tr>
                    <td>quote</td>
                    <td>string</td>
                    <td>The quote.</td>
                </tr>
                <tr>
                    <td>character_id</td>
                    <td>int</td>
                    <td>The id of the character who said the quote.</td>
                </tr>
                <tr>
                    <td>character</td>
                    <td>object</td>
                    <td>The character who said the quote.</td>
                </tr>
            </tbody>
        </table>
        <h2>Get all quotes</h2>
        <p>You can access the list of quotes by using the /quotes endpoint.</p>
            <CodeBlock 
                text={all_quotes_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        <h2>Get singular quote</h2>
        <p>You can get a single quote by adding the id as a parameter: /quote/155</p>
            <CodeBlock 
                text={single_quote_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        </div>
    )
}
