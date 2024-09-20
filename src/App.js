import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskControls from './components/TaskControls';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const markAllDone = () => {
    const newTasks = tasks.map((task) => ({
      ...task,
      completed: true
    }));
    setTasks(newTasks);
  };

  const toggleHideCompleted = () => {
    const newTasks = tasks.map((task) => ({
      ...task,
      hidden: task.completed ? !task.hidden : false
    }));
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Lista Zadań</h1>
      <TaskInput addTask={addTask} />
      <TaskControls
        markAllDone={markAllDone}
        toggleHideCompleted={toggleHideCompleted}
        hasTasks={tasks.length > 0}
      />
      <TaskList
        tasks={tasks}
        toggleCompleteTask={toggleCompleteTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
