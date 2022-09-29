import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ScoreBoard from './components/ScoreBoard';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Header />
      <ScoreBoard />
      <Board />
    </div>
  );
}

export default App;
