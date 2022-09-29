import React from 'react';
import Card from './Card';

//grid-flow-col
//auto-cols-auto
//auto-cols-fr
const Board = () => {
  return (
    <div className="grid gap-4 place-items-center grid-cols-3">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Board;
