import {useState} from "react";
import "./TaskBox.css"
export const TaskBox = ({result, children}) =>{
  const [show, setShow] = useState(true)
  return (
    <div className={show ? "" : "hidden"}>
      <div className={`Box ${result}`}>
        {children}
        <button onClick={() => setShow(!show)} className="">hide</button>
      </div>
    </div>
    )
}