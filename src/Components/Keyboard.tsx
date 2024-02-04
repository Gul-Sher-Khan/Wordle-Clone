import { AppContext } from "../App";
import Key from "./Key";
import { useCallback, useContext, useEffect } from "react";

const Keyboard = () => {
  const { onEnter, onDelete, onSelectLetter, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [keys1, keys2, keys3, onEnter, onDelete, onSelectLetter]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <Key
            key={key}
            keyVal={key}
            big={false}
            disbaled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key
            key={key}
            keyVal={key}
            big={false}
            disbaled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="line3">
        <Key key="Enter" keyVal="Enter" big={true} disbaled={false} />
        {keys3.map((key) => (
          <Key
            key={key}
            keyVal={key}
            big={false}
            disbaled={disabledLetters.includes(key)}
          />
        ))}
        <Key key="Delete" keyVal="Delete" big={true} disbaled={false} />
      </div>
    </div>
  );
};

export default Keyboard;
