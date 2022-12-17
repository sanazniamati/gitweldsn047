import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Layer, Rect, Shape, Stage, Text } from "react-konva";
import { FormCheck } from "react-bootstrap";
import SwitchExample from "./SwitchExample";

function App() {
  // 1 pixel (X)	0.0104166667 in
  const inch = 0.01;
  // 1 pixel (X)	0.0264583333 in
  const centimetre = 0.026;
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const a = 0;
  const b = 0;
  const [c, setC] = useState(5);
  const [d, setD] = useState(10);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width value is:", e.target.value);
    setC(e.target.value - a);
    console.log("c value is:", e.target.value - a);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    console.log("height value is:", e.target.value);
    setD(e.target.value - a);
    console.log("D value is:", e.target.value - d);
  };
  const handelOnChangeSwitch = () => {};
  return (
    <>
      <SwitchExample />
      {/*<hr />*/}
      {/*<label> width : </label>*/}
      {/*<input type={"number"} onChange={handelOnChangeWidth} value={width} />*/}
      {/*<label> height : </label>*/}
      {/*<input type={"number"} onChange={handelOnChangeHeight} value={height} />*/}
      {/*<FormCheck type={"switch"} onChange={handelOnChangeSwitch} />*/}
      {/*<Stage width={window.innerWidth} height={window.innerHeight}>*/}
      {/*  <Layer>*/}
      {/*    <Text text={"a=" + 0 + "  b=" + 0} x={10} y={50} fontSize={20} />*/}
      {/*    <Text text={"c=width-a  c=" + c} x={10} y={80} fontSize={20} />*/}
      {/*    <Text text={"d=height-b  d=" + d} x={10} y={100} fontSize={20} />*/}

      {/*    <Shape*/}
      {/*      x={100}*/}
      {/*      y={200}*/}
      {/*      sceneFunc={(context, shape) => {*/}
      {/*        context.beginPath();*/}
      {/*        context.moveTo(a, b);*/}
      {/*        context.lineTo(c, b);*/}
      {/*        context.lineTo(c, d);*/}
      {/*        context.lineTo(a, d);*/}
      {/*        context.closePath();*/}
      {/*        context.fillStrokeShape(shape);*/}
      {/*      }}*/}
      {/*      stroke="red"*/}
      {/*      strokeWidth={4}*/}
      {/*    />*/}
      {/*  </Layer>*/}
      {/*</Stage>*/}
    </>
  );
}

export default App;
