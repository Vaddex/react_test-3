import css from "./TaskForm.module.css";

const TaskForm = ({ onAdd }) => {
    const handlerSubmit = (evt) => {
        evt.preventDefault();
        onAdd({
            id: Date.now(),
            text: evt.target.elements.text.value,
        });
        evt.target.reset();
    };

    return (
        <form className={css.container} onSubmit={handlerSubmit}>
            <input type="text" name="text" className={css.field} />
            <button type="submit">Add task</button>
        </form>
    );
};

export default TaskForm;
