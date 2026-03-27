import { useState } from "react";

export default function EventToDo() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }

  return (
    <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
