import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onMove }) => {
  const handleDelete = () => {
    onDelete(task.id);  // Delete the task when called
  };

  const handleMove = (newStatus) => {
    onMove(task.id, newStatus);  // Move the task to a new status
  };

  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
      <div>
        {task.status !== 'pending' && (
          <button onClick={() => handleMove('pending')}>Move to Pending</button>
        )}
        {task.status !== 'inProgress' && (
          <button onClick={() => handleMove('inProgress')}>Move to In Progress</button>
        )}
        {task.status !== 'completed' && (
          <button onClick={() => handleMove('completed')}>Move to Completed</button>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default Task;
