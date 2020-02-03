import React from "react";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

function Toast() {
  function Notify() {toast("Clear");}

  return (
    <div>
      <ToastContainer onClick={Notify} />
      
    </div>
  );
}

export default Toast;