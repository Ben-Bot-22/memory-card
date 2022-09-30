import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Backdrop({ score, best, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="align-center absolute top-0 left-0 flex h-full w-full content-center justify-center bg-slate-800 opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* {score > best ? <h1 className="text-4xl text-white">New high score!</h1> : <h1 className="text-4xl text-white">Game Over</h1> } */}
    </motion.div>
  );
}

Backdrop.propTypes = {
  score: PropTypes.number.isRequired,
  best: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
