import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Modal() {
  return ReactDOM.createPortal(
    <div className="modal_div">
        <Outlet />
    </div>
  , document.getElementById("portal"));
}
