import AddTask from "./components/Task/AddTask";
import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";
import { useState, useEffect } from "react";

const App = () => {
  const [showTaskForm, toggleVisibilityOfTaskForm] = useState(false);

  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const taskFromJsonServer = await fetchTasks();
    updateTasks(taskFromJsonServer);
  };

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();

    return data;
  };

  const addTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const newTask = await response.json();
    updateTasks([...tasks, newTask]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    updateTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    updateTasks(
      tasks.map((task) => {
        if (task.id === id) task.reminder = !task.reminder;
        return task;
      })
    );
  };

  return (
    <div className="container">
      <Header
        actionName={showTaskForm ? "Close" : "Add"}
        onAddButtonClick={() => toggleVisibilityOfTaskForm(!showTaskForm)}
      />
      {showTaskForm && <AddTask onAdd={addTask} />}
      {tasks.length <= 0 ? (
        <h2 style={{ color: "blue", textAlign: "center" }}>No tasks to show</h2>
      ) : (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      )}
    </div>
  );
};

export default App;
