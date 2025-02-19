import React from "react";

const Box = ({ width, height, color }) => (
    <div className="box" style={{ width, height, backgroundColor: color }}></div>
);

export default Box;