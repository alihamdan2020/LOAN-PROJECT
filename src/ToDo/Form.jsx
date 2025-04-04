import React, { useContext } from 'react'
import { useState } from 'react'
import myStyle from "./style.module.css"
import { captionContext } from '../contexts/GlobalContext'
export default function Form({addTaske,list,counter,addCounter}) {

    const [taskeName,setTaskName]=useState("task number 6")
    let cap=useContext(captionContext)
  
    function handleTaskClick(e){
        e.preventDefault();
        const c=counter+1;
        addCounter(c); // since state  counter is came from parent, it can not update directly. because setCounte is asyncronus,
        const a = [...list]; //make copy of list, where list is the (state task) came from Main.js
        a.push({ id: c, taskName: taskeName }); // Use the updated 'counter'
        addTaske(a); 
        console.log(a); 

    }

  return (
    <div className={myStyle.formDiv}>
        <form>
            <input type="text" onChange={(e)=>setTaskName(e.target.value)} value={taskeName}></input>
            <button onClick={handleTaskClick}>{cap.captionValue}</button>
        </form>
    </div>
  )
}
