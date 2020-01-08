import React, { Component } from 'react';
import './App.css';
import StartGame from './components/StartGame.js';
import Game from './components/Game.js';
import { CalculateWinner } from './components/CalculateWinner.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      squares: Array(9).fill(null),
      xIsNext: true,
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
          console.log('startttttttt');
          console.log(start_inputs[i].value);
          if(start_inputs[i].value === 'zero'){
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

  handleClick(i){
    const squares = this.state.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({squares: squares, xIsNext: !this.state.xIsNext});
  };

  render() {
    let { gameStarted } = this.state
    return (
      <React.Fragment>
        {
          gameStarted ? <Game xIsNext={this.state.xIsNext} squares={this.state.squares} handleClick={(i)=>{this.handleClick(i)}} /> : <StartGame startGame={()=>{this.startGame()}} />
        }
      </React.Fragment>
    );
  }
}

export default App;