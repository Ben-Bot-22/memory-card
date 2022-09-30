import React, { useState } from 'react';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const updateScore = () => {
    setScore((current) => current + 1);
  };

  const updateBest = (highScore) => {
    setBest(() => highScore);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className="font-fontFamily font-medium">
      <Header />
      <div className="flex flex-col content-center items-center justify-center px-12">
        <ScoreBoard score={score} best={best} />
        <Board
          updateScore={updateScore}
          updateBest={updateBest}
          resetScore={resetScore}
          score={score}
          best={best}
        />
      </div>
    </div>
  );
}

export default App;

/*
TODO:

init modal w/ backdrop

*/
