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
  const [deleteButton, updateDeleteButton] = useState(false);

  function handleFormData(data) {
    updateTask((prev) => [...prev, data]);
  }

  function handleChecking(index,value) {
    console.log(value, index, tasks);
    updateTask((prev) => {
      const currentTaskList = [...prev];
      currentTaskList[index] = { ...currentTaskList[index], checked: value };

      updateDeleteButton(() =>
        currentTaskList.some((val) => val?.checked && val.checked === true)
      );
      return currentTaskList;
    });
  }

  function handleTaskDeletion() {
    updateTask((prev) => {
      const updatedTaskList = prev.filter((val) => !val?.checked);
      console.log(updatedTaskList);
      if(updatedTaskList.length == 0) {
        updateDeleteButton(false);
      }
      return updatedTaskList;
    })
  }

  return (
    <main className="p-5 bg-gray-200 mx-auto w-full md:w-3/4 shadow-lg my-2">
      <header>
        <h1 className="text-center text-xl font-semibold"> TODO App</h1>
      </header>
      <section>
        <TaskForm
          getFormData={handleFormData}
          showDeleteButton={deleteButton}
          deleteTask={handleTaskDeletion}
        />
        {tasks.map((val,i) => <TaskDetail key={i} taskDetails={val} taskCheckedStatus={(value) => handleChecking(i,value)} />)}
        {/* <TaskDetail taskList={tasks} taskCheckedStatus={handleChecking} /> */}
      </section>
    </main>
  );
}

export default App;
