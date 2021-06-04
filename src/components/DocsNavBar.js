import React from 'react'

export default function DocsNavBar() {
    return (
        <aside className='docs-navbar'>
            <ul>
                <a href="#">
                    <li>
                        <h2>Introduction</h2>
                    </li>
                </a>
                <a href="#">
                    <li>
                        <h2>Character</h2>
                    </li>
                </a>
                <a href="#">
                    <li className="sub-list">Character schema</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get all characters</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get a singular character</li>
                </a>
                <a href="#">
                    <li>
                        <h2>Episode</h2>
                    </li>
                </a>
                <a href="#">
                    <li className="sub-list">Episode schema</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get all episodes</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get a singular episode</li>
                </a>
                <a href="#">
                    <li>
                        <h2>Quote</h2>
                    </li>
                </a>
                <a href="#">
                    <li className="sub-list">Quote schema</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get all quotes</li>
                </a>
                <a href="#">
                    <li className="sub-list">Get a singular quote</li>
                </a>
            </ul>
        </aside>
    )
}
