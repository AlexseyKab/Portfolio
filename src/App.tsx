import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Project} from "./Project/Project";
import {Hire} from "./Hire/Hire";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Project/>
            <Hire/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
