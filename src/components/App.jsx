// import { useState } from 'react'
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import LangSwitcher from "./LangSwitcher/LangSwitcher";
import { useState } from "react";
import "./App.css";

function App() {
    const handleLogin = (userData) => {
        // Виконуємо необхідні операції з даними
        console.log(userData);
    };

    // default selected lang
    const [lang, setLang] = useState("ua");
    return (
        <>
            <h1>Please login to your account!</h1>

            <LoginForm onLogin={handleLogin} />
            <SearchBar />

            <div>
                <p>Selected language: {lang}</p>
                <LangSwitcher value={lang} onSelect={setLang} />
            </div>
        </>
    );
}

export default App;
