import React from 'react';
import Score from './Score';

const ScoreBoard = () => {
  return (
    <div className="text-white flex align-center justify-center m-2">
      <Score />
      <Score />
    </div>
  );
};

export default ScoreBoard;
