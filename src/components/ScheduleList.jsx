import React, { useState } from "react";
import ScheduleCard from "./ScheduleCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { v4 as uuidv4 } from "uuid";

const animatedComponents = makeAnimated();

export default function ScheduleList({ value, schedule }) {
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState("");
  const [getSelectedClasses, setGetSelectedItems] = useState([]);

  const options = schedule.map((item) => {
    return {
      value: item.name + item.event,
      label: item.name + item.event,
      ...item,
    };
  });

  const handleToggleOpen = (e) => {
    setToggle(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("selected", JSON.stringify(selected));
    setToggle("");
    console.log("selected", selected);
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
            <button onClick={handleSubmit}>auswählen</button>
          </div>
        )}
        <div>
          <ScheduleCard items={selected} key={uuidv4()} />
        </div>
      </div>
    </center>
  );
}
