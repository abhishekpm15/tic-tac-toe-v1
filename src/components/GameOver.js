import React from "react";
import { Button } from "@material-tailwind/react";
const GameOver = ({ win, won }) => {
  return win && (won === "✗" || won === "𝘖") ? (
    <>
      <div className="flex items-center space-x-5 ">
        <div className="font-semibold text-xl sm:text-3xl bg-red-400 text-white p-3 rounded-lg">
          {won} won the match
        </div>
        <div>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart
          </Button>
        </div>
      </div>{" "}
    </>
  ) : win && won === "Tie" ? (
    <>
      <div className="flex items-center space-x-5 ">
        <div className="font-semibold text-xl sm:text-3xl bg-red-400 text-white p-3 rounded-lg">
          Match is {won}
        </div>
        <div>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart
          </Button>
        </div>
      </div>{" "}
    </>
  ) : (
    ""
  );
};

export default GameOver;
