import React, { useState } from "react";
import { Group, Layer, Rect, Shape, Stage, Text } from "react-konva";

function App() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  let centimetre = 0.0264583333;
  const a = 0;
  const b = 0;
  const [c, setC] = useState(100);
  const [d, setD] = useState(50);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width value is:", e.target.value);
    setC(e.target.value - a);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    setD(e.target.value - a);
    console.log("height value is:", e.target.value);
  };
  return (
    <>
      <label> width : </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={width} />
      <label> height : </label>
      <input type={"number"} onChange={handelOnChangeHeight} value={height} />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text={"a=" + 0 + "  b=" + 0} x={10} y={50} fontSize={20} />
          <Text text={"c=width-a  c=" + c} x={10} y={80} fontSize={20} />
          <Text text={"d=height-b  d=" + d} x={250} y={80} fontSize={20} />
          {/*<Rect*/}
          {/*  x={20}*/}
          {/*  y={100}*/}
          {/*  width={width / 0.0264583333}*/}
          {/*  height={height / 0.0264583333}*/}
          {/*  fill="red"*/}
          {/*  shadowBlur={5}*/}
          {/*/>*/}
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
