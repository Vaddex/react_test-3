// import { useState } from 'react'
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import CoffeeSizeRadiobtn from "./CoffeeSizeRadiobtn/CoffeeSizeCheckbox";
import { useState } from "react";
import "./App.css";

function App() {
    const handleLogin = (userData) => {
        // Виконуємо необхідні операції з даними
        console.log(userData);
    };

    // default selected lang
    const [lang, setLang] = useState("ua");

    // coffee size radiobtn
    const [coffeeSize, setCoffeeSize] = useState("sm");

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
        </>
    );
}

export default App;
