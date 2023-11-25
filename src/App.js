import AddTask from "./components/Task/AddTask";
import Header from "./components/Header/Header";
import Tasks from "./components/Task/Tasks";
import { useState } from "react";

const App = () => {
  const [showTaskForm, toggleVisibilityOfTaskForm] = useState(false);

  const [tasks, updateTasks] = useState([
    {
      id: 1,
      name: "Clean my Clothes",
      day: "Jan 26th 2:30 PM",
      reminder: true,
    },
    {
      id: 2,
      name: "Iron Clothes",
      day: "Nov 26th 8:30 PM",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    updateTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
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
