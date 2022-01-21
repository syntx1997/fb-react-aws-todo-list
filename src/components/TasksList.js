import Task from "./Task";

function TaskLists() {

    const taskItemsList = [
        'Follow Edukasyon.ph on Facebook.',
        'Follow AWS Siklab Pilipinas on Facebook.',
        'Follow Zuitt Coding Bootcamp on Facebook.'
    ];

    return (
        <div>
            <input className="task-input" />
            <ul>
                {taskItemsList.map((task, index) => {
                    return <Task key={index} taskName={ task } />
                })}
            </ul>
        </div>
    );
}

export default TaskLists;