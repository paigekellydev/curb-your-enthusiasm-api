import React from 'react'
import CharacterSchemaTable from '../components/CharacterSchemaTable'
import QuoteSchemaTable from '../components/QuoteSchemaTable'
import EpisodeSchemaTable from '../components/QuoteSchemaTable'
export default function DocsContainer() {

    return (
        <div className="docs-container">
            <h2>Introduction</h2>
            <p>This documentation will help you get familiar with the resources of the Curb Your Enthusiasm API.</p>
            <CharacterSchemaTable />
            <EpisodeSchemaTable />
            <QuoteSchemaTable />
        </div>
    )
}
