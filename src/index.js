import React from 'react';
import reactDom from 'react-dom';
import './index.css';
import TaskLists from './components/TasksList';

function App() {

    const paraStyle = {
        marginBottom: "15px"
    };

    return ( 
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={ paraStyle }>The most simple amd amazing todo-list.</p>
                <TaskLists />
            </header>
        </div>
    );
}

reactDom.render(<App />, document.getElementById('root'));