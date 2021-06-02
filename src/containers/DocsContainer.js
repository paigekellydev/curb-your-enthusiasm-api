import React from 'react'
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks'
export default function DocsContainer() {

    const text = `handleOnClick = (pageName) => {

    if (pageName === 'home') {
      this.setState({
        display: "home"
      })
    } else if (pageName === 'docs') {
      this.setState({
        display: "docs"
      })
    } else if (pageName === 'about') {
      this.setState({
        display: "about"
      })
    } 
  }`
    return (
        <div className="docs-container">
            <h2>Introduction</h2>
            <CodeBlock 
                text={text}
                language={"jsx"}
                showLineNumbers={false}
                theme={dracula}
                codeBlock
            />
        </div>
    )
}
