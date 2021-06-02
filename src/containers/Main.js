import React, { Component } from 'react';
import Home from './Home'
import Docs from './Docs';
import About from './About';

class Main extends Component {

    displayContainer = () => {
        if (this.props.displayState === [true, false, false]) {
            return (<Home />)
        } else if (this.props.displayState === [false, true, false]) {
            return (<Docs />)
        } else if (this.props.displayState === [false, false, true]){
            return (<About />)
        }        
    }

    render() {
        return (
        <main>
            {this.displayContainer()}
        </main>
        );
    }
}

export default Main;

