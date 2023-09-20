import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Form from "./components/todolist/TodoForm";
import List from "./components/todolist/List";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/addtask" element={<Form/>}/>
      </Routes>
    </Router>
  );
};

export default App;
