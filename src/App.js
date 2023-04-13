import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Kharkiv"/>
                <footer>
                    This project was coded by {" "}
                    <a
                        href="https://deluxe-sundae-cbfa48.netlify.app" target="_blank"
                        rel="noreferrer">
                        Nataliia Matvieiko
                    </a>
                    {" "}and is {" "}
                    <a
                        href="https://github.com/Nataliia-Matvieiko/Weather-React-App"
                        target="_blank" rel="noreferrer">
                        open-sourced on GitHub
                    </a> and {" "}
                    <a href="https://adorable-starlight-01ff07.netlify.app" target="_blank" rel="noreferrer">
                        hosted on Netlify
                    </a>
                </footer>
            </div>
        </div>
    );
}

