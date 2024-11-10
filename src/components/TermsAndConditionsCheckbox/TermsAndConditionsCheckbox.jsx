import { useId } from "react";
import css from "./Terms&ConditionsCheckbox.module.css";

const TermsAndConditionsCheckbox = ({ hasAccepted, setHasAccepted }) => {
    const selectId = useId();
    const handleChange = (evt) => {
        setHasAccepted(evt.target.checked);
    };

    return (
        <div id={selectId} className={css.container}>
            <label>
                <input
                    type="checkbox"
                    name="terms"
                    id={selectId}
                    checked={hasAccepted}
                    onChange={handleChange}
                />
                I accept terms and conditions
            </label>
        </div>
    );
};

export default TermsAndConditionsCheckbox;
