import { useId } from "react";
import css from "./LangSwitcher.module.css";

const LangSwitcher = ({ value, onSelect }) => {
    const selectId = useId();

    return (
        <div className={css.container}>
            <label htmlFor={selectId}>Choose language</label>
            <select
                id={selectId}
                value={value}
                onChange={(evt) => onSelect(evt.target.value)}
            >
                <option value="en">English</option>
                <option value="ua">Ukrainian</option>
                <option value="pl">Polish</option>
            </select>
        </div>
    );
};

export default LangSwitcher;
