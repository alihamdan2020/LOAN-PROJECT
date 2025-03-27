import "./Modal.css"
import { useState } from "react";

export default function Modal({status,setStatus,msg =null}){ 
        function handleModalClick(){
            setStatus(false)
        }               
    if(status==true)
    return(
        <div
        className="modal" 
        style={{border:"12px solid red",display:status}} 
        onClick={handleModalClick}>
            <div className="modal-content">
            <h1
            style={{color:msg==null ? "green" : "red"}}>
                {msg==null ? "the info has beed send it succefully" : msg}
                </h1>
            </div>
        </div>
    )
    else
    return <></>
}