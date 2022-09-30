import React from 'react';
import PropTypes from 'prop-types';

function Card({ card, onClick }) {
  return (
    <button
      type="button"
      className="flex h-40 w-28 flex-col content-center justify-center rounded border border-black bg-white text-center shadow-lg"
      onClick={() => onClick(card.file)}
    >
      <div>
        <img
          src={`./src/assets/${card.file}.png`}
          alt={card.name}
          className="transition-all duration-75 hover:scale-[115%]"
        />
        <p className="text-xl">{card.name}</p>
      </div>
    </button>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    file: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
