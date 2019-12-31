import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StartGame from './components/StartGame.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      squares: Array(9).fill(null),
      // history: [{
      // }],
      // stepNumber: 0,
      xIsNext: true,
    };
  }

  render() {
    let { gameStarted } = this.state
    return (
      <React.Fragment>
        {
          gameStarted ? <Board /> : <StartGame />
        }
      </React.Fragment>
    );
  }
}

export default App;

function Board(props) {
  return (
    <div>Board</div>
  );
}