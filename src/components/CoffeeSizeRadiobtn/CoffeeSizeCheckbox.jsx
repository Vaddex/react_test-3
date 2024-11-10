import { useId } from "react";
import css from "./CoffeeSizeRadiobtn.module.css";

const CoffeeSizeRadiobtn = ({ coffeeSize, setCoffeeSize }) => {
    const selectID = useId();
    const handleSizeChange = (evt) => {
        setCoffeeSize(evt.target.value);
    };

    return (
        <div className={css.container} id={selectID}>
            <h2>Select coffee size</h2>
            <label>
                <input
                    id={selectID}
                    type="radio"
                    name="coffeeSize"
                    value="sm"
                    checked={coffeeSize === "sm"}
                    onChange={handleSizeChange}
                />
                Small
                <input
                    id={selectID}
                    type="radio"
                    name="coffeeSize"
                    value="md"
                    checked={coffeeSize === "md"}
                    onChange={handleSizeChange}
                />
                Medium
                <input
                    id={selectID}
                    type="radio"
                    name="coffeeSize"
                    value="lg"
                    checked={coffeeSize === "lg"}
                    onChange={handleSizeChange}
                />
                Large
            </label>
        </div>
    );
};

export default CoffeeSizeRadiobtn;
