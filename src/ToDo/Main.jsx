import React, { useState } from 'react'
import Form from './Form'
import LIstOfTasks from './LIstOfTasks'
import { userContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import { captionContext } from '../contexts/GlobalContext'

export default function Main() {
    let a =useContext(userContext)
    // let Caption=useContext(captionContext)

    const tasks=[
        {id:10,taskName:"task number 1"},
        {id:11,taskName:"task number 2"},
        {id:13,taskName:"task number 3"},
        {id:14,taskName:"task number 4"},
        {id:15,taskName:"task number 5"},
    ]
    let [counter,setCounter]=useState(15)
    const [task,setTask]=useState(tasks)

  return (
    <div style={{border:"0px solid green",width:"50vw",marginTop:"50px",padding:"10px"}}>
      <captionContext.Provider  value ={{captionValue:"add new task "}}>
        <h1 style={{marginBlock:"10px"}}>Welcom Mr {a.name} {a.family}</h1>
        <Form addTaske={setTask} list={task} counter={counter} addCounter={setCounter}/>
        <LIstOfTasks tasks={task} updateTask={setTask}/>
      </captionContext.Provider>
    </div>
  )
}
