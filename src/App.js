import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StartGame from './components/StartGame.js';
import Board from './components/Board.js';


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
  startGame(){
    let start_inputs = document.getElementsByName('start_game')
    this.setState({
      gameStarted: true,
    });
    console.log(start_inputs)
    console.log('start game buy checkijgn radio ')
  }

  render() {
    let { gameStarted } = this.state
    return (
      <React.Fragment>
        {
          gameStarted ? <Board /> : <StartGame startGame={()=>{this.startGame()}} />
        }
      </React.Fragment>
    );
  }
}

export default App;