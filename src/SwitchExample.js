import Form from "react-bootstrap/Form";
import { Layer, Stage, Rect } from "react-konva";
import { useState } from "react";
import React from "react";

function SwitchExample() {
  const [cmActive, setCmActive] = useState(false);
  const [mmActive, setMmActive] = useState(false);
  const [inActive, setInActive] = useState(false);
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(5);
  const handelOnChangeWidth = (e) => {
    setWidth(e.target.value);
  };
  const handelOnChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const handelOnCm = () => {
    setCmActive(true);
    setWidth(width / 0.0264583333);
    setHeight(height / 0.0264583333);
  };
  const handelOnMm = () => {
    setMmActive(true);
    setWidth(width / 0.264583333);
    setHeight(height / 0.264583333);
  };
  const handelOnIn = () => {
    setInActive(true);
    setWidth(width / 0.0104166667);
    setHeight(height / 0.0104166667);
  };

  return (
    <>
      <Form>
        <Form.Check
          type="switch"
          label="centimeter"
          checked={cmActive}
          id="centimeter-switch"
          onClick={handelOnCm}
        />
        <Form.Check
          type="switch"
          checked={mmActive}
          id="millimeter-switch"
          label="millimeter"
          onClick={handelOnMm}
        />
        <Form.Check
          type="switch"
          checked={inActive}
          id="millimeter-switch"
          label="inch"
          onClick={handelOnIn}
        />
        <label> width : </label>
        <input type={"number"} onChange={handelOnChangeWidth} value={width} />
        <label> height : </label>
        <input type={"number"} onChange={handelOnChangeHeight} value={height} />
      </Form>
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
}

export default SwitchExample;
