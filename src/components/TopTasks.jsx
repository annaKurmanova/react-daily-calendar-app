import React from "react";

const TopTasks = () => {
  return (
    <div className="sidebar-item top-tasks border p-2 mb-2">
      <p className="title">Top 3 tasks</p>
      <div className="tasks">
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
      </div>
    </div>
  );
};

export default TopTasks;
