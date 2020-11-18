// components must return something
// inheriot from react
// traditional fns, arrow fns, ES6 classes
// must import and export

import './App.css';

import React, { Component } from 'react'
import MyDiv from './MyDiv'

class App extends Component {
  handleClick(){
    console.log("I've been clicked!")
  }

  render() {
    const names = ["Max", "Zeus", "Axle"]
    const quirks = ["howls at ghosts", "obsessed with avocadoes", "eats expensive things"]
    const lis = names.map((name, i) => <MyDiv name={name} quirk={quirks[i]} key={i} handleOnClick={this.handleClick}/>)
    console.log(lis)
    return (
      <div className="App">
        Welcome to my app!
        {lis}
      </div>
    )
  }
}

export default App

