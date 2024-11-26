import css from "./FilterTask.module.css";

const FilterTask = ({ value, onFilter }) => {
    return (
        <div className={css.container}>
            <p className={css.label}>Search by name</p>
            <input
                type="text"
                value={value}
                onChange={(evt) => onFilter(evt.target.value)}
                className={css.input}
            />
        </div>
    );
};

export default FilterTask;
