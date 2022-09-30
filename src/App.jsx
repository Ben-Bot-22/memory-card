import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';
import GameOverModal from './components/GameOverModal';

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
    <div className="flex flex-col items-center font-fontFamily font-medium">
      <Header />
      <AnimatePresence>
        initial={false}
        exitBeforeEnter={true}
        {modalOpen && (
          <GameOverModal
            score={score}
            best={best}
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col content-center items-center justify-center px-12">
        <ScoreBoard score={score} best={best} />
        <Board
          updateScore={updateScore}
          updateBest={updateBest}
          resetScore={resetScore}
          score={score}
          best={best}
          open={open}
        />
      </div>
    </div>
  );
}

export default App;
