import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchBar = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return (
        <div className={css.container}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <p>{inputValue}</p>
        </div>
    );
};

export default SearchBar;
