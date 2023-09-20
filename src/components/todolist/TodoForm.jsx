import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title: task };
    console.log(newTask, "fdfd");

    axios
      .post("http://localhost:3031/task", newTask)
      .then((response) => {
        navigate("/");
        setTask("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="container text-center m-5">
          <h1 className="text-decoration-underline">To Do List Application</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="formclass  text-center">
        <input
          type="text"
          placeholder="Add to do list task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Form;
