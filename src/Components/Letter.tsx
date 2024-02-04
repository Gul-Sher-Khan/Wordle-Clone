import { useContext, useEffect } from "react";
import { AppContext } from "../App";

interface Props {
  letterPos: number;
  attemptVal: number;
}

const Letter = ({ attemptVal, letterPos }: Props) => {
  const {
    board,
    correctWord,
    currentAttempt,
    setDisabledLetters,
    disabledLetters,
  } = useContext(AppContext);

  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "incorrect"
      : "";

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev: any) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState ? letterState : ""}>
      {letter}
    </div>
  );
};

export default Letter;
