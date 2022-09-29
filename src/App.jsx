import { useState } from 'react';
// import './App.css';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';

function App() {
  return (
    <div className="font-fontFamily font-medium">
      <Header />
      <div className="flex flex-col justify-center content-center items-center px-12">
        <ScoreBoard />
        <Board />
      </div>
    </div>
  );
}

export default App;
