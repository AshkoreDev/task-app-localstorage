import React, { useEffect, useState } from 'react';

const TaskCreator = ({ createNewTask }) => {

  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => setNewTask(e.target.value);

  const handleSubmit = (e) => {

    e.preventDefault();
    createNewTask(newTask);
    setNewTask('');
  };

  return (

    <section>
      <form onSubmit={handleSubmit} className="my-5 row">
        <div className="col-9">
          <input type="text" placeholder="Ingresar una nueva tarea" value={newTask} onChange={handleChange} className="form-control text-capitalize"/>
        </div>
        <div className="col-3">
          <button className="btn btn-success btn-md">Guardar</button>
        </div>
      </form>
    </section>

  );
};

export default TaskCreator;