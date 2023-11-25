import { useSelector } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  // Defino un estado de edición.
  const [taskToEdit, setTaskToEdit] = useState("");

  const onEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <>
      <header>
        <h1>App Task with Redux ToolKit</h1>
      </header>
      <main className="app">
        <TaskForm taskToEdit={taskToEdit} editTask={onEditTask} />
        <TaskList editTask={onEditTask} />
      </main>
    </>
  );
}

export default App;
