import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ title, tasks, toggleTask, showCompleted = false }) => {

  const taskTableRows = (doneValue) =>  {

    return (

      tasks
        .filter(task => task.done === doneValue)
        .map((task) => <TaskRow key={task.name} task={task} toggleTask={toggleTask}/>)

    );
  };

  return (

    <table className="table table-dark table-striped table-bordered border-secondary">

      <thead>
        <tr className="table-primary text-dark">
          <th>{title}</th>
        </tr>
      </thead>

      <tbody>
        { taskTableRows(showCompleted) }
      </tbody>

    </table>
  );
};

export default TaskTable;