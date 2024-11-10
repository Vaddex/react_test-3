// import { useState } from 'react'
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import CoffeeSizeRadiobtn from "./CoffeeSizeRadiobtn/CoffeeSizeCheckbox";
import TermsAndConditionsCheckbox from "./TermsAndConditionsCheckbox/TermsAndConditionsCheckbox";
import ControlledLoginForm from "./ControlledLoginForm/ControlledLoginForm";
import { useState } from "react";
import { useId } from "react";
import "./App.css";

function App() {
    // generate unique id
    const selectId = useId();

    // handle login and paddword
    const handleLogin = (userData) => {
        // Виконуємо необхідні операції з даними
        console.log(userData);
    };

    // default selected lang

    const [lang, setLang] = useState("ua");

    // coffee size radiobtn
    const [coffeeSize, setCoffeeSize] = useState("sm");

    // checkbox checker
    const [hasAccepted, setHasAccepted] = useState(false);

    return (
        <>
            <h1>Please login to your account!</h1>

            <LoginForm onLogin={handleLogin} />
            <SearchBar />

            <div>
                <LangSwitcher value={lang} onSelect={setLang} />
                <p>Selected language: {lang}</p>
            </div>

            <CoffeeSizeRadiobtn
                coffeeSize={coffeeSize}
                setCoffeeSize={setCoffeeSize}
            />

            <div>
                <TermsAndConditionsCheckbox
                    hasAccepted={hasAccepted}
                    setHasAccepted={setHasAccepted}
                />
                <button type="button" id={selectId} disabled={!hasAccepted}>
                    I agree
                </button>
            </div>

            <ControlledLoginForm />
        </>
    );
}

export default App;
