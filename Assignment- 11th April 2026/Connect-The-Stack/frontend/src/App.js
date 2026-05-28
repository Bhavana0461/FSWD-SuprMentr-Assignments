import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task List</h1>
      {tasks.map((item) => (
        <div key={item.id}>
          <h3>{item.task}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
