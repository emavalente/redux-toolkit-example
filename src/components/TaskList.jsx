import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";

const TaskList = ({ editTask }) => {
  // Descargo el State Global Actual del slice.
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list">
      {/* Uso el State Global para crear las Cards */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
