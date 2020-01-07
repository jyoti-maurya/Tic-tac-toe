import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StartGame from './components/StartGame.js';
import Board from './components/Board.js';
import Home from './check.js';


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
      // turn: "",
    };
  }
  startGame(){
    let start_inputs = document.getElementsByName('start_game')
    let checked = false;
    if(start_inputs.length > 0){
      for (var i = 0; i < start_inputs.length; i++) {
        if(start_inputs[i].checked){
          checked = true;
          this.setState({
            gameStarted: true,
          });
          if(start_inputs[i].checked.value == 'zero'){
            this.setState({
              xIsNext: false,
            });
          }
        }
      }
    }
    if(!checked){
      window.alert('select option')
    }
  }

  render() {
    let { gameStarted } = this.state
    return (
      <React.Fragment>
        {
          gameStarted ? <Home /> : <StartGame startGame={()=>{this.startGame()}} />
        }
      </React.Fragment>
    );
  }
}

export default App;