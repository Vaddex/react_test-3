// import { useState } from 'react'
import LoginForm from "./LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

function App() {
    const handleLogin = (userData) => {
        // Виконуємо необхідні операції з даними
        console.log(userData);
    };
    return (
        <>
            <h1>Please login to your account!</h1>

            <LoginForm onLogin={handleLogin} />
            <SearchBar />
        </>
    );
}

export default App;
