import React, { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { v4 as uuidv4 } from "uuid";
import "./TeacherCard.css";

const animatedComponents = makeAnimated();

const getDatafromLocalStorage = (value) => {
  const data = localStorage.getItem(value);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default function TeacherList({ value, list }) {
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState("");
  const [itemList, setItemList] = useState([]);

  const filteredList = list.filter((item) => item.title === value);
  const options = filteredList.map((item) => {
    return { value: item.name, label: item.name, ...item };
  });

  const filteredLS = itemList.filter((item) => item.title === value);

  const handleToggleOpen = (e) => {
    setToggle(e.target.value);
  };
  const handleSubmit = (e) => {
    const targetTitle = e.target.value;
    localStorage.setItem(`${targetTitle}`, JSON.stringify(selected));
    setToggle("");
    showItems();
  };

  const showItems = () => {
    const teacherList = getDatafromLocalStorage("Dozent*innen");
    const assistantList = getDatafromLocalStorage("assistant");
    const socialworkerList = getDatafromLocalStorage("Sozialarbeiter*innen");
    setItemList(() => [...teacherList, ...assistantList, ...socialworkerList]);
  };

  useEffect(() => {
    showItems();
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
            <button value={value} onClick={handleSubmit}>
              auswählen
            </button>
          </div>
        )}
        <div className="teacher-card-wrapper">
          <TeacherCard items={filteredLS} key={uuidv4()} />
        </div>
      </div>
    </center>
  );
}
