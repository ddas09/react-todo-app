import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setTaskName] = useState("");
  const [day, setTaskDay] = useState("");
  const [reminder, setTaskReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter task name");
      return;
    }

    if (!day) {
      alert("Please enter task day");
      return;
    }

    onAdd({ name, day, reminder });

    setTaskName("");
    setTaskDay("");
    setTaskReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add your task"
          value={name}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add task time"
          value={day}
          onChange={(e) => setTaskDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setTaskReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
