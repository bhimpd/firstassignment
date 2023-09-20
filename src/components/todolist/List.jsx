import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import axios from "axios";
import { NavLink } from "react-router-dom";

const List = () => {
  const [task, setTask] = useState([]);
  const [searchedData, setSearchedData] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3031/task");
      const data = await res.json();
      setTask(data);
    } catch (error) {
      console.log("data fetching error", error);
    }
  };
  console.log(task, "api");

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3031/task/${id}`);
    setTask((list) => list.filter((list) => list.id !== id));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>To Do List </h1>

      <div className="container text-center">
        <label className="label m-2">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearchedData(e.target.value)}
            placeholder="Search the added item..."
          />
        </label>
        <input type="submit" value="Search" />
      </div>
      <NavLink to="/addtask">
        <h6 style={{float:'right', marginRight:"5rem", marginBottom:"3rem"}}>Add Task</h6>
      </NavLink>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Task Lists</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {task
            .filter((task) =>
              task.title.toLowerCase().includes(searchedData.toLowerCase())
            )
            .map((list) => (
              <tr key={list.id}>
                <td>{list.title}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteItem(list.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;
