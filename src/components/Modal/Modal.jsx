import React from 'react'
import ReactDOM from 'react-dom';
import "./Modal.css"
import EditK9Unit from '../EditUnit/EditK9Unit';

export default function Modal(props) {
  if(!props.openStateProp) return null;
  return ReactDOM.createPortal(
    <>
    <div className="modal_overlay"></div>
    <div className="modal_div">
      <EditK9Unit />
    </div>
    </>
  , document.getElementById("portal"));
}
