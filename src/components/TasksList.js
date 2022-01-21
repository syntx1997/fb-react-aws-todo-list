import { react, useState } from "react";
import Task from "./Task";

function TaskLists() {

    const [taskItemsList, setTaskItemsList] = useState([
        'Follow Edukasyon.ph on Facebook.',
        'Follow AWS Siklab Pilipinas on Facebook.',
        'Follow Zuitt Coding Bootcamp on Facebook.'
    ]);

    const [taskValue, setTaskValue] = useState('');
    // console.log(taskValue);

    const inputChangeHandler = (e) => {
        setTaskValue(e.target.value);
    };

    const addTaskHandler = () => {
        setTaskItemsList([taskValue, ...taskItemsList]);
        setTaskValue('');
    };

    return (
        <div>
            <input
            className="task-input"
            placeholder="Create a new Task"
            onChange={ inputChangeHandler }
            onBlur={ addTaskHandler }
            value={ taskValue }
            />
            <ul>
                {taskItemsList.map((task, index) => {
                    return <Task key={index} taskName={ task } />
                })}
            </ul>
        </div>
    );
}

export default TaskLists;