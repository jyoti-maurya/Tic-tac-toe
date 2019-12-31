import React, { Component } from 'react';
import PropTypes from 'prop-types';

function StartGame(props) {
  return (
    <div className = "start-game">
      <div className="start-game__head">
        Pick Your side
      </div>
      <div className="start-game__body">
        <div className="start-game__users">
				  <label for="cross"><div className="start-game--cross"></div></label>
				  <input type="radio" name="start_game" id="cross" value="" />
        	<label for="zero"><div className="start-game--zero"></div></label>
				  <input type="radio" name="start_game" id="zero" value="" />
        	<div className="start-game__continue"><button>Continue</button></div>
        </div>
      </div>
    </div>
  )
}
StartGame.propTypes = {

}

StartGame.defaultProps = {

}

export default StartGame;