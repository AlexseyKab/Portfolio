import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Project} from "./Project/Project";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Project/>
        </div>
    );
}

export default App;
