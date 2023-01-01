import Form from "react-bootstrap/Form";
import { Layer, Stage, Rect } from "react-konva";
import { useState } from "react";
import React from "react";

function SwitchExample() {
  // 1 mm = 3.7795275591 pixel (X)
  let factor = 37.8;
  const [cmActive, setCmActive] = useState(false);
  const [mmActive, setMmActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
    console.log("width" + width);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
    console.log("height" + height);
  };

  const handelCentimeter = () => {
    setCmActive(true);
    setWidth(width / 0.0264583333);
    setHeight(height / 0.0264583333);
  };
  const handelMillimeter = () => {
    setMmActive(true);
    setWidth(width / 0.264583333);
    setHeight(height / 0.264583333);
  };
  const handelInch = () => {
    setInActive(true);
    setWidth(width / 0.0104166667);
    setHeight(height / 0.0104166667);
  };

  return (
    <>
      <Form.Check
        type="switch"
        label="centimeter"
        checked={cmActive}
        id="centimeter-switch"
        // onClick={handelCentimeter}
      />
      <Form.Check
        type="switch"
        checked={mmActive}
        id="millimeter-switch"
        label="millimeter"
        // onClick={handelMillimeter}
      />
      <Form.Check
        type="switch"
        checked={inActive}
        id="millimeter-switch"
        label="inch"
        // onClick={handelInch}
      />
      <label> width in mm: </label>
      <input type={"number"} onChange={handelOnChangeWidth} value={width} />
      <label> height in mm : </label>
      <input type={"number"} onChange={handelOnChangeHeight} value={height} />

      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={100}
            width={width * factor}
            height={height * factor}
            fill="red"
            shadowBlur={5}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default SwitchExample;
