import { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import './App.css';

const initialTasks = [
  { id: 1, title: 'Task 1', completed: false, status: 'pending' },
  { id: 2, title: 'Task 2', completed: false, status: 'inProgress' },
];

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the existing list
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Filter out the deleted task
  };

  const moveTask = (id, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status } : task // Update the task status
    );
    setTasks(updatedTasks); // Update the tasks list after moving the task
  };

  const taskGroup = {
    pending: tasks.filter((task) => task.status === 'pending'),
    inProgress: tasks.filter((task) => task.status === 'inProgress'),
    completed: tasks.filter((task) => task.status === 'completed'),
  };

  return (
    <>
      <div className="App">
        <h1>Task Management App</h1>
        <TaskForm onAddTask={addTask} />
        <div>
          {['pending', 'inProgress', 'completed'].map((status) => (
            <div className="task-list" key={status}>
              <h2>{status}</h2>
              <div>
                {taskGroup[status].map((task) => (
                  <Task key={task.id} task={task} onDelete={deleteTask} onMove={moveTask} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
