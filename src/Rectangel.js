import React from "react";
import { useState } from "react";
import { Layer, Rect, Stage } from "react-konva";

function Rectangel() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width value is:", e.target.value);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    console.log("height value is:", e.target.value);
  };

  return (
    <>
      <label> width : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={width} />
      <label> height : </label>
      <input type={"number"} onChange={handelOnChangeHeight} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={100}
            width={width / 0.0264583333}
            height={height / 0.0264583333}
            fill="red"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default Rectangel;
