import React from "react";
import { useNavigate } from "react-router-dom";
 export function postService(values) {
    const navigate=useNavigate()
    console.log(values);
    fetch("http://localhost:3001/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      .then((x)=>navigate("/"))
    
 }
function FormikFunc() {

  return <></>;
}

export default FormikFunc;
