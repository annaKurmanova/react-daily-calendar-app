import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Mode from "./components/theme-switch/Mode";

function App() {
  return (
    <Container className="py-3">
      <Mode />
      <Row className="pt-3">
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
        <Col className="border p-2">
          <h3 className="title">Date: 2/18/2023</h3>
          <div className="sidebar">
            <div className="sidebar-item top-tasks border p-2 mb-2">
              <p className="title">Top 3 tasks</p>
              <div className="tasks">
                <p className="task border">This is a task</p>
                <p className="task border">This is a task</p>
                <p className="task border">This is a task</p>
              </div>
            </div>
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
            <div className="sidebar-item notes border p-2">
              <p className="title">Notes</p>
              <div className="notes">notes</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
