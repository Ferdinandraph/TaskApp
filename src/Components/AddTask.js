import "./AddTask.css"
import {useState, useRef} from "react"
export const AddTask = ({tasks, setTask})=>{
  //const [taskValue, setTaskValue] = useState("");
  const taskRef = useRef("");
  const [progress, setProgress] = useState(false);
  
  const handleReset = (event) =>{
    taskRef.current.value = "";
    setProgress(false);
  }
  
  const handleSubmit = (event)=>{
    event.preventDefault();
    const task = {
      id : Math.floor(Math.random() *10000),
      name: taskRef.current.value,
      completed: Boolean(progress)
    }
    setTask([...tasks, task])
    handleReset();
  }
  return(
    <fieldset className="AddTask">
      <form onSubmit={handleSubmit}>
        <input type="name" name="task" id="task" placeholder="Add Task" ref={taskRef}/>
        <select onChange={(e)=>setProgress(e.target.value)} value={progress}>
          <option value={false}>pending</option>
          <option value={true}>completed</option>
        </select>
        <button className="Reset" onClick={handleReset}>Reset</button>
        <button className="AddTaskButton" type="submit">Add Task</button>
      </form>
    </fieldset>
    )
}