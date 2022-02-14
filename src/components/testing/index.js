/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useStyles } from "./styles";
export default function Testing(props) {
  const classes = useStyles();
  const [press, setPressed] = useState(false);

  const buttonToggle = () => {
    setPressed(true);
    // console.log("value of press", press);
  };

  return (
    <>
      <h1 className={classes.heading}>Hello Renderd easy</h1>
      <div className="row">
        <div className="col-lg-4 d-flex justify-content-center"></div>
        <div className="col-lg-4 d-flex justify-content-center">
          <button className="btn btn-info w-100" onClick={() => buttonToggle()}>
            {press ? "true" : "false"}
          </button>
        </div>
        <div className="col-lg-4 d-flex justify-content-center"></div>
      </div>
    </>
  );
}
