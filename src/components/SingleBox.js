import React, { useState } from "react";
import { checkWin } from "../utils/checkWin";
import matrixFormed from "../utils/matrixFormed";
import { matrix } from "../utils/matrixFormed";
import { toast } from 'react-toastify';


const SingleBox = ({ posX, posY, turn, setTurn, win, setWin, won, setWon }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    if (!win) {
      if (matrix[posX][posY] === null) {
        const mat = matrixFormed(posX, posY, turn);
        const res = checkWin(mat);
        console.log("res", res);
        if (res === "Tie") {
          console.log("tie");
          setWin(true);
          setWon("Tie");
        } else if (res) {
          console.log(turn + " won the match");
          setWin(true);
          setWon(turn);
        }
        if (turn === "✗") {
          setTurn("𝘖");
          setValue("✗");
        } else {
          setTurn("✗");
          setValue("𝘖");
        }
      } else {
        console.log("dont put on top");
        toast.error("Dont try to play the fool with me nigesh",{ autoClose: 1000 })
      }
    }
  };

  return (
    <div
      className={`w-24 h-24 sm:w-32 sm:h-32 border-2 border-black flex items-center justify-center rounded-2xl text-2xl font-semibold hover:scale-110 transition duration-150 ${
        value === "✗"
          ? "bg-green-300"
          : value === "𝘖"
          ? "bg-cyan-200"
          : "bg-white"
      }`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default SingleBox;
