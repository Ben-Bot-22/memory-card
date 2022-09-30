import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function Backdrop({ onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="align-center absolute top-0 left-0 flex h-full w-full content-center justify-center bg-black blur-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  );
}

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Backdrop;
