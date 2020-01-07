import React from 'react';
import PropTypes from 'prop-types';

function StartGame(props) {
  return (
    <div className = "start-game">
      <div className="start-game__head text--bold text--center">
        Pick Your side
      </div>
      <div className="start-game__body text--center">
        <div className="start-game__users">
				  <input type="radio" name="start_game" id="cross" value="cross" />
          <label htmlFor="cross"><div className="start-game--cross"></div></label>
				  <input type="radio" name="start_game" id="zero" value="zero" />
          <label htmlFor="zero"><div className="start-game--zero"></div></label>
        </div>
      	<div className="start-game__continue"><button onClick={props.startGame}>Continue</button></div>
      </div>
    </div>
  )
}
StartGame.propTypes = {
	startGame : PropTypes.func
}

StartGame.defaultProps = {
	startGame : () => console.log('heyyy')
}

export default StartGame;