import React from "react";

const TaskRow = ({ task, toggleTask }) => {

  const handleCheckbox = () => toggleTask(task);

  return (

    <tr>
      <td className="d-flex justify-content-between">
        <span className={task.done ? "text-muted" : "text-white"}>{task.name}</span>
        <input type="checkbox" checked={task.done} onChange={handleCheckbox}/>
      </td>
    </tr>

  );
};

export default TaskRow;