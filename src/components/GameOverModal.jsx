import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';

const dropIn = {
  hidden: {},
  visible: {},
  exit: {},
};

function GameOverModal({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=""
        variants={dropIn}
      />
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Play Again
      </motion.button>
    </Backdrop>
  );
}

GameOverModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default GameOverModal;
