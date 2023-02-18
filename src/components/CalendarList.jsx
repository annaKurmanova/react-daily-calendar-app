import React from "react";
import Col from "react-bootstrap/Col";

const CalendarList = () => {
  return (
    <Col className="border p-2">
      <h1 className="title">
        <span>Daily</span> Calendar
      </h1>
      <div className="calendar-list">
        <div className="calendar-item border">6am : this is a task</div>
        <div className="calendar-item border">6am : this is a task</div>
        <div className="calendar-item border">6am : this is a task</div>
        <div className="calendar-item border">6am : this is a task</div>
        <div className="calendar-item border">6am : this is a task</div>
      </div>
    </Col>
  );
};

export default CalendarList;
