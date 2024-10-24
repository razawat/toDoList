import "./App.css";
import TaskForm from "./Componets/taskForm";
import TaskDetail from "./Componets/taskDetail";
import { useState } from "react";

// const arr = [
//   { desc: "First", date: "Jun, 1, 2019", category: "Work" },
//   { desc: "Second", date: "Jun, 5, 2019", category: "Work" },
//   { desc: "Third", date: "Jun, 19, 2019", category: "Personal" },
// ];

function App() {
  const [tasks, updateTask] = useState([]);

  function handleFormData(data) {
    updateTask((prev) => [...prev, data]);
  }

  return (
    <main className="p-5 bg-gray-200 mx-auto w-full md:w-3/4 shadow-lg my-2">
      <header>
        <h1 className="text-center text-xl font-semibold"> TODO App</h1>
      </header>
      <section>
        <TaskForm getFormData={handleFormData} />
        <TaskDetail taskList={tasks} />
      </section>
    </main>
  );
}

export default App;
