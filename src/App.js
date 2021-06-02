import Header from './containers/Header';
import Main from './containers/Main';
import './stylesheets/App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
        display: [true, false, false]
  }
  
  handleOnClick = (pageName) => {

    if (pageName === 'home') {
      this.setState({
        display: [true, false, false]
      })
    } else if (pageName === 'docs') {
      this.setState({
        display: [false, true, false]
      })
    } else if (pageName === 'about') {
      this.setState({
        display: [false, false, true]
      })
    } else {
      this.setState({
        display: [true, false, false]
      })
    }
  }
  
  render() {

    return (
      <div className="App">
        <Header handleOnClick={this.handleOnClick} />
        <Main displayState={this.state.display}/>
      </div>
    );
  }
}

export default App;

