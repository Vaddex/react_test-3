console.log("TaskList component is being loaded");
import Task from "../Task/Task";
import css from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete }) => {
    return (
        <ul className={css.container}>
            {tasks.map((task) => (
                <li className={css.taskBox} key={task.id}>
                    <Task data={task} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
