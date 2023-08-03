import "./CardList.css"
import styles from "./CardList.module.css"
export const CardList = ({task, handleDelete}) => {
  return (
  <li className={task.completed ? "completed" : "notcompleted"} > 
              <span className = {styles.title}> <span className ="IdAndName">{task.id} - {task.name}</span> <button onClick={() => handleDelete(task.id)} className="Delete">
                    Delete
                </button>
              </span>
            </li>
            )
}