import React from 'react'
import ReactDOM from 'react-dom';
import "./Modal.css"

export default function Modal(props) {
  if(!props.isOpen) return null;
  return ReactDOM.createPortal(
    <>
    <div className="modal_overlay"></div>
    <div className="modal_div">
      {props.children}
    </div>
    </>
  , document.getElementById("portal"));
}
