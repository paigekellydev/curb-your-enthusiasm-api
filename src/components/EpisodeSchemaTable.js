import React from 'react'
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks'

export default function CharacterSchemaTable() {

    const all_episodes_text = `
    GET https://curb-your-enthusiasm.herokuapp.com/episodes

    [
        {
            "id": 761,
            "episode": "S10E01",
            "air_date": "January 19, 2020",
            "title": "Happy New Year",
            "characters": [
                {
                    id": 92,
                    "name": "Jeff Garlin",
                    "actor": "Jeff Greene",
                    "image": "data...."
                },
                {
                    id": 93,
                    "name": "Cheryl David",
                    "actor": "Cheryl Hines",
                    "image": "data:image/..."
                }
            ]
        },
        //...
    ]`

    const single_episode_text = `
    
    GET https://curb-your-enthusiasm.herokuapp.com/episodes/761
    
    [
        {
            "id": 761,
            "episode": "S10E01",
            "air_date": "January 19, 2020",
            "title": "Happy New Year",
            "characters": [
                {
                    id": 92,
                    "name": "Jeff Garlin",
                    "actor": "Jeff Greene",
                    "image": "data...."
                },
                {
                    id": 93,
                    "name": "Cheryl David",
                    "actor": "Cheryl Hines",
                    "image": "data:image/..."
                }
            ]
        }
    ]`
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
                    <td>episode</td>
                    <td>string</td>
                    <td>Season and episode number, formatted as 'S01E01'</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>string</td>
                    <td>The title of the episode.</td>
                </tr>
                <tr>
                    <td>characters</td>
                    <td>array</td>
                    <td>List of all characters in the episode.</td>
                </tr>
            </tbody>
        </table>
        <h2>Get all episodes</h2>
        <p>You can access the list of episodes by using the /episodes endpoint.</p>
            <CodeBlock 
                text={all_episodes_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        <h2>Get singular episode</h2>
        <p>You can get a single episode by adding the id as a parameter: /episodes/761</p>
            <CodeBlock 
                text={single_episode_text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        </div>
    )
}
