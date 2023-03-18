import React, { useState } from 'react';

const TaskCreator = ({ createNewTask }) => {

  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => setNewTask(e.target.value);

  const handleSubmit = (e) => {

    e.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  };

  return (

    <form onSubmit={handleSubmit} className="my-4 d-flex gap-2">

      <input type="text" placeholder="Nueva Tarea" value={newTask} onChange={handleChange} className="form-control"/>

      <button className="btn btn-success btn-md">Guardar</button>

    </form>

  );
};

export default TaskCreator;