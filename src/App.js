import React, { useEffect, useState } from "react";
import { Layer, Shape, Stage, Text } from "react-konva";

function App() {
  // 1cm --> 37.8 pixel
  // 1mm --> 3.78 pixel
  // 1 inch --> 96 pixel

  const [type, setType] = useState("pixel");
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);

  if (type === "centimeter") {
    var factor = 37.8;
  } else if (type === "millimeter") {
    var factor = 3.78;
  } else if (type === "inch") {
    var factor = 96;
  } else if (type === "pixel") {
    var factor = 1;
  }
  useEffect(() => {
    // setWidth(width * factor);
    setC(width * factor - a);
    // setHeight(height * factor);
    setD(height * factor - b);
  }, [type]);

  const a = 0;
  const b = 0;
  const [c, setC] = useState(width);
  const [d, setD] = useState(height);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width value is:", e.target.value);
    setC((e.target.value - a) * factor);
    console.log("c value is:", (e.target.value - a) * factor);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    console.log("height value is:", e.target.value);
    setD((e.target.value - b) * factor);
    console.log("D value is:", (e.target.value - b) * factor);
  };
  const handelSelect = (e) => {
    console.log("factor value is:", factor);
    setType(e.target.value);
    console.log("type value is:", e.target.value);
  };
  return (
    <>
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
