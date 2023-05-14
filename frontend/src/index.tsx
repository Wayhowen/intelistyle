import React from 'react';
import ReactDOM from 'react-dom';
import "./main.css"

const App = () => {
    return (
        <div className="container">
            <h1>Simple React + TypeScript + Bootstrap Project</h1>
            <p>Welcome to your new project!</p>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));