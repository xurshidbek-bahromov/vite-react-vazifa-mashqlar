import React from "react";

const Greeting = ({ name = "Guest" }) => <h2 className="greeting">Hello, {name}!</h2>;

export default Greeting;