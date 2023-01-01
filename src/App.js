import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Layer, Rect, Shape, Stage, Text } from "react-konva";
import { FormCheck } from "react-bootstrap";
import SwitchExample from "./SwitchExample";

function App() {
  // 1cm --> 37.8 pixel
  // let factor = 37.8;
  // 1 inch --> 96 pixel
  // let factor = 96;
  const [type, setType] = useState("pixel");
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);

  if (type === "centimeter") {
    let factor = 37.8;
  } else if (type === "millimeter") {
    let factor = 3.78;
  } else if (type === "inch") {
    let factor = 96;
  } else {
    let factor = 1;
  }

  const a = 0;
  const b = 0;
  const [c, setC] = useState(width);
  const [d, setD] = useState(height);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width value is:", e.target.value);
    setC((e.target.value - a) * factor);
    console.log("c value is:", e.target.value - a);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    console.log("height value is:", e.target.value);
    setD((e.target.value - a) * type);
    console.log("D value is:", e.target.value - d);
  };
  const handelSelect = (e) => {
    setType(e.target.value);
    console.log("type value is:", e.target.value);
  };
  return (
    <>
      {/*<SwitchExample />*/}
      <label>choose an unit </label>
      <select value={type} onChange={handelSelect}>
        <option value="centimeter">centimeter</option>
        <option value="millimeter">millimeter</option>
        <option value="pixel">pixel</option>
        <option value="inch">inch</option>
      </select>
      <label> width : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={width} />
      <label> height : </label>
      <input type={"number"} onChange={handelOnChangeHeight} value={height} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={"a=" + 0 + "  b=" + 0} x={10} y={50} fontSize={20} />
          <Text text={"c=width-a  c=" + c} x={10} y={80} fontSize={20} />
          <Text text={"d=height-b  d=" + d} x={10} y={100} fontSize={20} />

          <Shape
            x={100}
            y={200}
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(a, b);
              context.lineTo(c, b);
              context.lineTo(c, d);
              context.lineTo(a, d);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
            stroke="red"
            strokeWidth={4}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
