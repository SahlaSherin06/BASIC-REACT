
import { useState } from "react";


export function ToDoList(){
    const[task,setTask]=useState("")
    const[prob,setProb]=useState([])

    function AddTask(){
        if(task!==""){
            setProb([...prob,task])
            setTask("")
        }
    }

    function DeleteTask(index){
        setProb(prob.filter((e,i)=>(i!==index)))
    }

    return(
        <div>
            <h1>ToDo App</h1>
            <input
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)} 
            />
            <button onClick={AddTask}>ADD</button>

            <ol>
                {prob.map((t,index)=>(
                    <li key={index}>
                        {t}
                        <button onClick={()=>DeleteTask (index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
}


