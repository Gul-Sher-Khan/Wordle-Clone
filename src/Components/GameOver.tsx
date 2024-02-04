import { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, correctWord, currentAttempt } = useContext(AppContext);

  return (
    <div className={gameOver.guessedWord ? "gameover_win" : "gameover_lose"}>
      <h3>{gameOver.guessedWord ? "You Correctly guessed" : "You Failed"}</h3>
      <h3>Correct: {correctWord}</h3>
      {gameOver.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
};

export default GameOver;
