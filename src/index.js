import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Rect } from "react-konva";
import { Html } from "react-konva-utils";
const App = () => {
  const widthRef = useRef();
  const heightRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const handelOnChangeWidth = (e) => {
    let w = e.target.value;
    let widthToCm = w * 0.0264583333;
    setWidth(widthToCm);
    console.log("value is:", e.target.value);
  };
  const handelOnChangeHeight = (e) => {
    let h = e.target.value;
    let heightToCm = h * 0.026;
    setHeight(heightToCm);
    console.log("value is:", e.target.value);
  };
  const handelOnClick = () => {
    setWidth(widthRef.current.value * 0.02645833);
    setHeight(heightRef.current.value * 0.02645833);
  };

  return (
    <>
      <label> width : </label>
      <input
        ref={widthRef}
        type={"number"}
        // onChange={handelOnChangeWidth}
        value={width}
        style={{ width: 250, height: 50 }}
      />
      <label> height : </label>
      <input
        ref={heightRef}
        type={"number"}
        // onChange={handelOnChangeHeight}
        style={{ width: 250, height: 50 }}
      />
      <button onClick={handelOnClick}>create Rect</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={100}
            width={width}
            height={height}
            fill="red"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
