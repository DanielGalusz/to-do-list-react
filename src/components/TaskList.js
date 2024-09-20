import React from 'react';

function TaskList({ tasks, toggleCompleteTask, deleteTask }) {
  return (
    <div className="task-list-container">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            style={{ display: task.hidden ? 'none' : 'flex' }}
          >
            <span>{task.text}</span>
            <div className="button-container">
              <button
                className="complete-button"
                onClick={() => toggleCompleteTask(index)}
              >
                ✔️
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
