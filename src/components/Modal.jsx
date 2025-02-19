import React from "react";

const Modal = ({ title, children }) => (
    <div className="modal">
        <h3>{title}</h3>
        {children}
    </div>
);

export default Modal;