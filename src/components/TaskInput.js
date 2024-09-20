import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <div className="task-input-container">
      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Dodaj nowe zadanie..."
        />
        <button type="submit" className="add-task-button">
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
