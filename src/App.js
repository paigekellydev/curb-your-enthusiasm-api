import Header from './containers/Header';
import Main from './containers/Main';
import './stylesheets/App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    display: "home"
  }
  
  handleOnClick = (pageName) => {

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
  }
  
  render() {

    return (
      <div className="App">
        <Header handleOnClick={this.handleOnClick}/>
        <Main display={this.state.display}/>
      </div>
    );
  }
}

export default App;

