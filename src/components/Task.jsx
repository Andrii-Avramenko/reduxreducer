import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/actions";
import { Button } from "./Button";

export const Task = ({ task }) => {
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteTask(task.id))
    const handleSelect = () => dispatch(toggleTask(task.id))
  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleSelect} />
      <p>{task.text}</p>
      <Button type="button" onClick={handleDelete}>Delete</Button>
    </div>
  );
};
