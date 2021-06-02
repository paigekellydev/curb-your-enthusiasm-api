import React from 'react'
import DocsNavBar from '../components/DocsNavBar'
import DocsContainer from '../containers/DocsContainer'

export default function Docs() {
    return (
        <div className="docs-page">
           <DocsNavBar />
           <DocsContainer />
        </div>
    )
}
