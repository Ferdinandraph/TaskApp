import './App.css';
import {TaskList} from "./Components/TaskList"
import {Header} from "./Components/Header"
import {AddTask} from "./Components/AddTask"
import {Footer} from "./Components/Footer"
import {useState} from "react";
function App() {
  const [tasks, setTask] = useState([
  ]);
  return (
    <div className="App">
    <Header />
    <AddTask tasks={tasks} setTask={setTask}/>
    <TaskList tasks={tasks} setTask={setTask}/>
    <Footer />
    </div>
  );
}
export default App