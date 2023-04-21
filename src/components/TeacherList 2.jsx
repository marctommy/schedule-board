import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { v4 as uuidv4 } from "uuid";
import "./TeacherCard.css";

const animatedComponents = makeAnimated();

export default function TeacherList({ value, list }) {
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState("");
  const [getSelectedItems, setGetSelectedItems] = useState([]);

  const filteredList = list.filter((item) => item.title === value);
  const options = filteredList.map((item) => {
    return { value: item.name, label: item.name, ...item };
  });

  const handleToggleOpen = (e) => {
    setToggle(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("selected", JSON.stringify(selected));
    setToggle("");
  };

  useEffect(() => {
    const getSelectedItems = JSON.parse(localStorage.getItem("selected"));
    console.log("getSelectedItems", getSelectedItems);
    setGetSelectedItems(getSelectedItems);
  }, []);

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
        <div className="teacher-card-wrapper">
          <TeacherCard items={selected} key={uuidv4()} />
        </div>
      </div>
    </center>
  );
}
