import React , { useState, useEffect } from 'react';
import TaskCreator from './components/TaskCreator.jsx';
import TaskTable from './components/TaskTable.jsx';
import VisibilityControl from './components/VisibilityControl.jsx';

function App() {

  const [tasks, setTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    
    if(!tasks.find((task) => task.name === taskName) && taskName !== '') {
      setTasks([...tasks, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => setTasks(tasks.map((t) => t.name === task.name ? { ...t, done: !t.done } : t));

  const cleanTasks = () => {

    setTasks(tasks.filter((task) => !task.done));
    setShowCompleted(false);
  };

  const handleShowCompleted = (checked) => setShowCompleted(checked);

  useEffect(() => {

    let data = localStorage.getItem('tasks');

    if(data) {

      setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);

  return (
    
    <div className="bg-dark min-vh-100 text-white">
      <div className="container col-md-4 offset-md-4 p-2">
      
        <TaskCreator createNewTask={createNewTask}/>
        <TaskTable title="Tareas por hacer" tasks={tasks} toggleTask={toggleTask}/>
        <VisibilityControl setShowCompleted={handleShowCompleted} cleanTasks={cleanTasks} isChecked={showCompleted}/>
        {
          showCompleted && (<TaskTable title="Tareas hechas" tasks={tasks} toggleTask={toggleTask} showCompleted={showCompleted} className="tablea"/>)
        }

      </div>
    </div>

  );
};

export default App;