import React from 'react'
import reactDom from 'react-dom'
import './index.css'

function App() {

    const paraStyle = {
        marginBottom: "15px"
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={ paraStyle }>The most simple amd amazing todo-list.</p>
                <ul>
                    <li className="tasks-item">Follow Edukasyon.ph on Facebook.</li>
                    <li className="tasks-item">Follow AWS Siklab Pilipinas on Facebook.</li>
                    <li className="tasks-item">Follow Zuitt Coding Bootcamp on Facebook.</li>
                </ul>
            </header>
        </div>
    );
}

reactDom.render(<App/>, document.getElementById('root'));