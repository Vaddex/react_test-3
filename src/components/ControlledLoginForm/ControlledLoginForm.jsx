import { useId, useState } from "react";
import css from "./ControlledLoginForm.module.css";

const ControlledLoginForm = () => {
    const selectId = useId();
    const [values, setValues] = useState({
        login: "",
        password: "",
    });

    const handleChange = (evt) => {
        setValues({
            ...values,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // field values
        console.log(values);

        // clear fields
        setValues({
            login: "",
            password: "",
        });
    };

    return (
        <div className={css.container} id={selectId}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="login"
                    value={values.login}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default ControlledLoginForm;
