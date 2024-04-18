import React, { useEffect } from "react";
import SingleBox from "./SingleBox";

const TicTacToe = ({turn, setTurn, win, setWin,won, setWon}) => {
  useEffect(()=>{
    console.log(win);
  },[win])

  return <Rows turn={turn} setTurn={setTurn} win={win} setWin={setWin} won={won} setWon={setWon}/>;
};
const Rows = ({turn, setTurn, win, setWin,won, setWon}) => {
  return (
    <div className="space-y-4">
      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className="">
          <Cols posX={rowIndex} turn={turn} setTurn={setTurn} win={win} setWin={setWin} won={won} setWon={setWon}/>
        </div>
      ))}
    </div>
  );
};

const Cols = ({posX, turn, setTurn, win, setWin,won, setWon}) => {
  return (
    <div className="flex space-x-4">
      {[0, 1, 2].map((colIndex) => (
        <div key={colIndex} className="">
          <SingleBox posX={posX} posY={colIndex} turn={turn} setTurn={setTurn} win={win} setWin={setWin} won={won} setWon={setWon}/>
        </div>
      ))}
    </div>
  );
};

export default TicTacToe;
