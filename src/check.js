import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import './Home.css';
import App from './App.js';

class Board extends Component {
	craeteSquares() {
		let boardRow = [];
		let k=0;
   	for (let i = 0; i < 3; i++) {
   		let sqr = [];
     	for (let i = 0; i < 3; i++) {
     		sqr.push(this.renderSquare(k))
     		k++;
     	}
     	boardRow.push(<div className="board-row" style = {{ display: 'table'}}>{sqr}</div>);
   	}
   	return boardRow
	};
	renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
   render() {
      return (
        <div>
         	{this.craeteSquares()}
        </div>
      )
   }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i){
  	ReactDOM.findDOMNode(document.getElementById(''+this.state.stepNumber)).style.fontWeight = 'initial';
  	const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
  	if (calculateWinner(squares) || squares[i]) {
      return;
    }
  	console.log('s '+squares);
  	squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({history: history.concat([{
        squares: squares,
      }]),stepNumber: history.length, xIsNext: !this.state.xIsNext});
  };
  jumpTo(step) {
  	ReactDOM.findDOMNode(document.getElementById(''+this.state.stepNumber)).style.fontWeight = 'initial';
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
    console.log(step);
    ReactDOM.findDOMNode(document.getElementById(''+step)).style.fontWeight = 'bold';
  }

  render() {
		const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    console.log('after calcs');
    console.log(winner);
    const moves = history.map((step, move) => {
     	console.log('move');
     	console.log(step);
     	console.log(move);
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button className="move" id = {move} onClick={() => this.jumpTo(move)}>{desc}</button>
          <ul>
          	<li key={move}>
          		{step.squares}
          	</li>
          </ul>
        </li>
      );
    });
 		console.log('win '+winner);
 		console.log(moves);
    let status;
    if (winner) {
    	console.log('winner array');
    	console.log(winner);
    	winner.map((w, k) =>{
	    	ReactDOM.findDOMNode(document.getElementsByClassName("square")[w]).style.fontWeight = 'bold';
	    	ReactDOM.findDOMNode(document.getElementsByClassName("square")[w]).style.color = 'green';
    	});
      status = 'Winner: ' + current.squares[winner[0]];
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    if(moves.length -1 == 9){
    	ReactDOM.findDOMNode(document.getElementById('status')).style.color = 'green';
    	status = 'game over match Draw'
    }
    return (
      <div className="game" style= {{ marginTop: '33%', width: '100%' }}>
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div id='status'>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}
function Square(props) {
  return (
    <button className="square" onClick = {props.onClick}>
      {props.value}
    </button>
  );
}

function calculateWinner(squares){
	 const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default Home;




