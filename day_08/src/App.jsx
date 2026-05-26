import React, { useState } from 'react'

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }
  const handleDelete = (index) => {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTasks(updatedTask);
  }
  const handleEdit = (index) => {
    const updatedValue = prompt("Edit your task", tasks[index]);

    if (updatedValue !== null && updatedValue.trim() !== "") {
      const updatedTask = [...tasks];
      updatedTask[index] = updatedValue;
      setTasks(updatedTask);
    }
  }

  return (
    <div>
      <h1 style={{color:"red"}}>TODO LIST</h1>
      <input type="text"name="task"id="task"placeholder='Enter Task Here'value={task}
        onChange={(e) => setTask(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <div>
        <h2 style={{color:"blue"}}>Tasks</h2>
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <p>{t}</p>
              <button onClick={() => handleEdit(index)}>EDIT</button>
              <button onClick={() => handleDelete(index)}> DELETE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;