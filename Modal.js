import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">{children}</div>
    </div>
  );
};

export default Modal;
