import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import CalendarList from "./components/CalendarList";
import Sidebar from "./components/Sidebar";

function App() {
  const [theme, setTheme] = useState(false);

  const handleThemeToggle = () => {
    setTheme((theme) => !theme);
  };

  return (
    <div className={`App ${theme ? "dark" : "light"}`}>
      <Container className="py-3">
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onChange={handleThemeToggle} />
            <div className="slider round"></div>
          </label>
          <em>Dark Mode</em>
        </div>
        <Row className="pt-3">
          <CalendarList />
          <Sidebar />
        </Row>
      </Container>
    </div>
  );
}

export default App;
