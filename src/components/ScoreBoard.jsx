import React from 'react';
import PropTypes from 'prop-types';
import Score from './Score';

function ScoreBoard({ score, best }) {
  return (
    <div className="align-center m-2 flex justify-center gap-4 text-white">
      <Score text="Score: " score={score} />
      <Score text="Best: " score={best} />
    </div>
  );
}

ScoreBoard.propTypes = {
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
};

export default ScoreBoard;
