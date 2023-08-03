import { useState } from "react";
import {CardList} from "./CardList"
import {TaskBox} from "./TaskBox"
import "./TaskList.css"
export const TaskList =  ({tasks, setTask}) => {
  const [show, setShow] = useState(true)
  
  function handleDelete(id){
    setTask(tasks.filter((task) => task.id != id))
  }
    return (
        <section className="Container">
        <div className="ListHeaderView">
        <h2 > Task List </h2>
        <button onClick={()=> setShow(!show)} className="Toggle">{show ? "Hide Task" : "Show Task"}</button>
        </div>
         <ul className="Listed">
          { show && tasks.map((task) => (
            <CardList task={task} handleDelete={handleDelete} key={task.id}/>
          ))}
         </ul>
    </section>
    
      )
}