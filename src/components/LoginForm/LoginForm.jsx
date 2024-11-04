import { useId } from "react";
import css from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
    const id = useId();

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const form = evt.target;
        const { login, password } = form.elements;

        onLogin({
            login: login.value,
            password: password.value,
        });

        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={css.container}>
            <input type="text" name="login" id={id} />
            <input type="text" name="password" id={id} />
            <button type="submit">Log in</button>
        </form>
    );
};

export default LoginForm;
