import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css"
import {Filter} from "./components/Filter";
import {Display} from "./components/Display";

const App = () => {
    return (
        <div className="flex flex-row basis-full h-screen bg-gray-400/50">
            <Filter/>
            <Display/>
        </div>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);