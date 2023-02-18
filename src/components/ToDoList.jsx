import React from "react";

const ToDoList = () => {
  return (
    <div className="sidebar-item todo-list border p-2 mb-2">
      <p className="title">To do list</p>
      <div className="todos">
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
        <p className="task border">This is a task</p>
      </div>
    </div>
  );
};

export default ToDoList;
