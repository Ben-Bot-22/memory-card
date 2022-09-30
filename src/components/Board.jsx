import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import GameOverModal from './GameOverModal';

const cards = [
  { file: '001', name: 'Bulbasaur' },
  { file: '002', name: 'Ivysaur' },
  { file: '003', name: 'Charmander' },
  { file: '004', name: 'Charizard' },
  { file: '005', name: 'Squirtle' },
  { file: '006', name: 'Wartortle' },
  { file: '007', name: 'Blastoise' },
  { file: '008', name: 'Catapie' },
  { file: '009', name: 'Weedle' },
  { file: '010', name: 'Ratata' },
  { file: '011', name: 'Pikachu' },
  { file: '012', name: 'Jigglypuff' },
];

function Board({ updateScore, updateBest, resetScore, score, best }) {
  const [selected, setSelected] = useState([]);

  function shuffle() {
    const shuffled = cards.sort(() => 0.5 - Math.random());
    // console.log(shuffled);
    return shuffled;
  }

  useEffect(() => {
    shuffle();
  }, [selected]);

  const handleClick = (card) => {
    setSelected((current) => {
      return [...current, card];
    });
    if (selected.includes(card)) {
      console.log('game over');
      // init modal w/ backdrop
      resetScore();
    } else {
      updateScore();
      if (score > best) updateBest(score);
    }
  };

  return (
    <div className="mt-4 grid grid-cols-3 place-items-center gap-4">
      {cards.map((card) => (
        <Card key={card.file} card={card} onClick={handleClick} />
      ))}
    </div>
  );
}

Board.propTypes = {
  updateScore: propTypes.func.isRequired,
  updateBest: propTypes.func.isRequired,
  resetScore: propTypes.func.isRequired,
  score: propTypes.number.isRequired,
  best: propTypes.number.isRequired,
};

export default Board;
