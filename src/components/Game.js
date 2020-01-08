import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CalculateWinner } from './CalculateWinner.js';
import Board from "./Board.js"

class Game extends Component {
  render() {
    let winner = CalculateWinner(this.props.squares);
    let $status_id =  ReactDOM.findDOMNode(document.getElementById('status'))
    let status;
    if (winner) {
    	winner.map((w, k) =>{
	    	ReactDOM.findDOMNode(document.getElementsByClassName("square")[w]).style.background = '#81ca81';
	    	return null
    	});
    	$status_id.style.color = 'green';
      status = 'Winner is' + this.props.squares[winner[0]];
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }
    if(!winner && !this.props.squares.includes(null)){
    	$status_id.style.color = 'green';
    	status = 'game over match Draw'
    }
    return (
      <div className="game">
        <div className="game-info">
          <div id='status'>{ status }</div>
        </div>
        <div className="game-board">
          <Board squares={this.props.squares} onClick={(i) => this.props.handleClick(i)} />
        </div>
      </div>
    );
  }
}

export default Game;




