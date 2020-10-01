import React from "react";
import logo from "./logo.svg";
import { SNSKakaoLogin } from "./components/SNSLogin";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SNSKakaoLogin />
            </header>
        </div>
    );
}

export default App;
