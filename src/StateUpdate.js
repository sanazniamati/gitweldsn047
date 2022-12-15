import { useEffect, useState } from "react";

function StateUpdate() {
  const [myState, setMyState] = useState(0);

  const listener = () => {
    console.log(`state in handler: ${myState}`);
    // state in handler: 0
  };

  useEffect(() => {
    window.addEventListener("dblclick", listener);
  }, []);

  return (
    <div className="App">
      <h1>State: {myState}</h1>
      <button onClick={() => setMyState(myState + 1)}>update state</button>
    </div>
  );
}

export default StateUpdate;
