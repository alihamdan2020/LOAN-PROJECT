let  specificTask;//global declaration
import React, { useContext } from 'react'
import { captionContext } from '../contexts/GlobalContext'
import { useState } from 'react'

export default function LIstOfTasks({tasks,updateTask}) {
  const [visible,setVisible]=useState(false)
    
    let cap=useContext(captionContext)

    const listOfTasks=tasks.map((task)=>{
        return (
        <li key={task.id}>
            <p>#{task.id} - {task.taskName}</p>
            <p>
              <i class="fa-solid fa-trash" onClick={()=>handleTrashClick(task.id)}></i>
              <i class="fa-solid fa-pen-to-square" onClick={()=>handleModifyClick(task.id)}></i>
            </p> 
        </li>)
    })

    function handleTrashClick(id){
      const specificTask=tasks.findIndex((a)=>{
        return a.id===id
      }) 
      const a =[...tasks]
      a.splice(specificTask,1)
      updateTask(a)
    }

    function handleModifyClick(id){
    setVisible(true)
    specificTask=tasks.find((a)=>{
      return a.id===id
    }) 
    document.getElementById("name").value=specificTask.taskName
     }

    function handleUpdateClick(){
      const allTasks=tasks.map((task)=>{
        if (task.id === specificTask.id) {
          return { ...task, taskName: document.getElementById("name").value };
        } else {
          return task;
        }
        
      })
      updateTask(allTasks)
      setVisible(false)

    }
  return (
    <>
    <ul>
        {listOfTasks}
    </ul>
    <div style={{display:visible? "block" : "none"}}>
      <input type="text" name="" id="name" /> <button onClick={handleUpdateClick}>update</button>
    </div>
    </>
  )
}
