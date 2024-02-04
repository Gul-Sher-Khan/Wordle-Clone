import { useContext } from "react";
import { AppContext } from "../App";

interface Props {
  keyVal: string;
  big: boolean;
  disbaled: boolean;
}

const Key = ({ keyVal, big, disbaled }: Props) => {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === "Enter") {
      onEnter();
    } else if (keyVal === "Delete") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      className={big ? "bigkey" : "Key"}
      id={disbaled ? "disabled" : ""}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
};

export default Key;
