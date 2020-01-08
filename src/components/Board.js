import React, { Component } from 'react';

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
    let classname = "";
    if(this.props.squares[i] === "X"){
      classname = "cross";
    }
    else if(this.props.squares[i] === "O"){
      classname ="zero"
    }
    else{
      classname = ""
    }
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} classname={classname}/>;
  }
  render() {
    return (
      <div>
       	{this.craeteSquares()}
      </div>
    )
  }
}

function Square(props) {
  return (
    <button className="square" onClick = {props.onClick}>
      <div className={"start-game--"+props.classname}></div>
    </button>
  );
}

export default Board;
