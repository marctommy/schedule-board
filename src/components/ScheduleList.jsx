import React, { useState } from "react";
import Schedulecard from "./ScheduleCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { v4 as uuidv4 } from "uuid";

const animatedComponents = makeAnimated();

export default function ScheduleList({ value, schedule }) {
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState("");

  const filteredList = schedule.filter((item) => item.title === value);
  const options = filteredList.map((item) => {
    return { value: item.name, label: item.name, ...item };
  });

  const handleToggleOpen = (e) => {
    setToggle(e.target.value);
  };

  return (
    <center>
      <div className="list-container">
        <button
          value={value}
          className="selector-button"
          onClick={handleToggleOpen}
        >
          {value}
        </button>
        {value === toggle && (
          <div>
            <Select
              className="selector"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={options}
              onChange={(items) => setSelected(items)}
            />
            <button onClick={() => setToggle("")}>auswählen</button>
          </div>
        )}
        <div className="teacher-card-wrapper">
          <Schedulecard items={selected} key={uuidv4()} />
        </div>
      </div>
    </center>
  );
}
