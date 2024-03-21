import React from 'react'
import ReactDOM from 'react-dom';
import "./Modal.css"
import EditK9Unit from '../EditUnit/EditK9Unit';
import { useDispatch } from 'react-redux';
import { setFormModalState, updateFormData } from '../../store';

export default function Modal(props) {
  if(!props.openStateProp) return null;

  const dispatch = useDispatch();

  function handleClose() {
    dispatch(setFormModalState(false));
    dispatch(updateFormData({}));
  }

  return ReactDOM.createPortal(
    <>
    <div className="modal_overlay" onClick={handleClose}></div>
    <div className="modal_div">
      <EditK9Unit />
    </div>
    </>
  , document.getElementById("portal"));
}
