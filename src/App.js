import { useState, useEffect } from "react";
import TeacherList from "./components/TeacherList";
import "./App.css";
import "./components/Footer";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import ScheduleList from "./components/ScheduleList";
import styles from "./components/Buttons.module.css";

function App() {
  const [list, setList] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [showClasses, setShowClasses] = useState(false);
  const [showTeacher, setShowTeacher] = useState(false);

  useEffect(() => {
    fetch("/data/teachersInfo.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log("error", err));
    console.log("list", list);
  }, []);

  useEffect(() => {
    fetch("/data/scheduleInfo.json")
      .then((res) => res.json())
      .then((data) => setSchedule(data))
      .catch((err) => console.log("error", err));
  }, []);
  console.log("schedule", schedule);

  const handleClasses = () => {
    setShowClasses(!showClasses);
  };
  const handleTeacher = () => {
    setShowTeacher(!showTeacher);
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <button onClick={handleClasses} className={styles.classes}>
          {" "}
          Kurse
        </button>
      </div>
      <div>
        <button onClick={handleTeacher} className={styles.teachers}>
          {" "}
          Leute{" "}
        </button>
      </div>
      <div className="list-main">
        {showClasses ? (
          <div>
            <ScheduleList value="Kurse" schedule={schedule} />
          </div>
        ) : null}
        {showTeacher ? (
          <div>
            <TeacherList value="Dozent*innen" list={list} />
            <TeacherList value="Sozialarbeiter*innen" list={list} />
          </div>
        ) : null}
      </div>
      {/*  */}
    </>
  );
}

export default App;
