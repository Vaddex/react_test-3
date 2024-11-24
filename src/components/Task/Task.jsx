import css from "./Task.module.css";

const Task = ({ data: { id, text }, onDelete }) => {
    return (
        <div className={css.container}>
            <h3>{text}</h3>
            <button
                type="button"
                className={css.btn}
                onClick={() => onDelete(id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Task;
