import React from 'react';
import PropTypes from 'prop-types';

function Score({ text, score }) {
  return (
    <div className="flex text-center text-white">
      <div className="w-28 rounded-xl bg-fourth">
        {text} {score}
      </div>
    </div>
  );
}

Score.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Score;
