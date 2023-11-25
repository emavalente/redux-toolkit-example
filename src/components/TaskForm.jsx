import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";

const TaskForm = ({ taskToEdit, editTask }) => {
  // Tarea guardada en State Local.
  const [task, setTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  // Declaración del useDispatch().
  const dispatch = useDispatch();

  // Descargo el State Global Actual del slice.
  const tasks = useSelector((state) => state.tasks);

  // Actualización del State Local.
  const handleChange = (e) => {
    setTask((prevTask) => ({ ...prevTask, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Si hay id para editar Disparo del action que Actualiza una tarea del State Global.
    if (taskToEdit) {
      dispatch(updateTask(task));

      editTask("");
    } else {
      // Disparo del action que modifica el State Global.
      // paso una copia del State Local y agrego un id (Libreria uuid).
      dispatch(
        addTask({
          id: uuid(),
          ...task,
        })
      );
    }
    // Reset del State Local
    setTask({
      title: "",
      description: "",
      completed: false,
    });
  };

  useEffect(() => {
    // Efecto que busca un id de edición al iniciar el componente o al cambiar el estado en App
    if (taskToEdit) {
      const taskToUpdate = tasks.find((task) => task.id === taskToEdit);
      setTask(taskToUpdate);
    }
  }, [taskToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titulo de Tarea</label>
      <input
        type="text"
        name="title"
        id="title"
        value={task.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Descripción</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button type="submit">{taskToEdit ? "Edit" : "Save"}</button>
    </form>
  );
};

export default TaskForm;
