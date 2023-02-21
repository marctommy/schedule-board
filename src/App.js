import { useState, useEffect } from "react";
import TeacherList from "./components/TeacherList";
import "./App.css";
import "./components/Footer";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import ScheduleList from "./components/ScheduleList";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/data/teachersInfo.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log("error", err));
    console.log("list", list);
  }, []);

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch("/data/scheduleInfo.json")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log("error", err));
    console.log("schedule", schedule);
  }, []);

  return (
    <>
      <Header />

      <div className="list-main">
        <ScheduleList value="Kurse" schedule={schedule} />
        <TeacherList value="Dozent*innen" list={list} />
        <TeacherList value="Sozialarbeiter*innen" list={list} />
      </div>
      {/*  */}

      <Footer />
    </>
  );
}

export default App;
