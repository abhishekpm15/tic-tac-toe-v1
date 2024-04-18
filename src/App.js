import { useState } from 'react';
import './App.css';
import GameOver from './components/GameOver';
import Header from './components/Header';
import TicTacToe from './components/TicTacToe';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [turn, setTurn] = useState("✗");
  const [win, setWin] = useState(false);
  const [won ,setWon] = useState(null)
  return (
    <div className="App flex flex-col w-full justify-center items-center mt-10">
        <Header />
        <GameOver turn={turn} win={win} won={won}/>
        <div className='absolute top-56 sm:top-60'>
          <TicTacToe turn={turn} setTurn={setTurn} win={win} setWin={setWin} won={won} setWon={setWon}/>
        </div>
    </div>
  );
}

export default App;
