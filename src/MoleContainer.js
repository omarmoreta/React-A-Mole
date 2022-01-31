import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
  let [wackMole, setMole] = useState(false);

  const handleClick = (e) => {
    props.setScore(props.score + 1);
    setMole(false);
  };

  let displayMole = wackMole ? (
    <Mole
      setScore={props.setScore}
      toggle={setMole}
      handleClick={handleClick}
    />
  ) : (
    <EmptySlot toggle={setMole} />
  );
  return (
    <div style={{ display: "inline-block", width: "30vw" }}>{displayMole}</div>
  );
}

export default MoleContainer;
