import React from 'react'
import reactDom from 'react-dom'
import './index.css'

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p>The most simple amd amazing todo-list.</p>
            </header>
        </div>
    );
}

reactDom.render(<App/>, document.getElementById('root'));