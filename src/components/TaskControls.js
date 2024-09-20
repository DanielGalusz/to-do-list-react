import React from 'react';

function TaskControls({ markAllDone, toggleHideCompleted, hasTasks }) {
  if (!hasTasks) return null;

  return (
    <div className="task-controls">
      <button className="text-button" onClick={toggleHideCompleted}>
        Ukryj zrobione
      </button>
      <button className="text-button" onClick={markAllDone}>
        Zaznacz wszystkie jako zrobione
      </button>
    </div>
  );
}

export default TaskControls;
