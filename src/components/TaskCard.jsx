import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskCard = ({ task, editTask }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Despacho la funcion deleteTask para borrar una tarea del State Global
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    //Paso el id de la tarea a editar hacia el State Local en App
    editTask(id);
  };
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <div className="task-buttons">
        <button className="edit" onClick={() => handleEdit(task.id)}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
