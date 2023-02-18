import React from "react";
import Col from "react-bootstrap/Col";
import ToDoList from "./ToDoList";
import TopTasks from "./TopTasks";
import Notes from "./Notes";

const Sidebar = () => {
  return (
    <Col className="border p-2">
      <h3 className="title">Date: 2/18/2023</h3>
      <div className="sidebar">
        <TopTasks />
        <ToDoList />
        <Notes />
      </div>
    </Col>
  );
};

export default Sidebar;
