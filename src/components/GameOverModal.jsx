import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

function GameOverModal({ handleClose, score, best }) {
  return (
    <>
      <Backdrop onClick={handleClose} />
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className="margin-auto absolute top-[40%] flex h-40 w-72 flex-col content-center items-center justify-center gap-2 rounded border-2 border-white bg-slate-900"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-4xl text-white">Game Over</h1>
        <div>
          <p className="text-first">Score {score}</p>
          <p className="text-first">Best {best}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-[50%] rounded border border-white text-white"
          onClick={handleClose}
        >
          Play Again
        </motion.button>
      </motion.div>
    </>
  );
}

GameOverModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
};

export default GameOverModal;
